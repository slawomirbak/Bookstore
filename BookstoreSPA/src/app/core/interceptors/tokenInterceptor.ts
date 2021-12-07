import { HttpInterceptor, HttpRequest, HttpEvent, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { UserService } from '../services/user.service';
import { catchError, switchMap, filter, take } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(public userService: UserService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.userService.getJwtToken()) {
      req = this.addToken(req, this.userService.getJwtToken());
    }
    return next.handle(req).pipe(
      catchError(error => {
        return throwError(error);
        // if (error instanceof HttpErrorResponse && error.status === 401) {
        //   return this.handle401Error(req, next);
        // } else {
        //   return throwError(error);
        // }
      })
    );
  }

  private addToken(req: HttpRequest<any>, token: string) {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.userService.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.jwt);
          return next.handle(this.addToken(request, token.jwt));
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        })
      );
    }
  }
}
