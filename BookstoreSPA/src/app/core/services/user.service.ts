import { Injectable } from '@angular/core';
import { AbstractRepositoryService } from './abstract.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, mapTo } from 'rxjs/operators';
import { ILoginCredentials } from '../models/ILoginCredentials';
import { IToken } from '../models/IToken';

@Injectable({
  providedIn: 'root'
})
export class UserService  extends AbstractRepositoryService {
  baseEndpoint = 'api/user';
  constructor(http: HttpClient) {
    super(http);
  }

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private readonly USER = "USER";
  private loggedUser$ = new BehaviorSubject(this.getLogedUser());
  user$ = this.loggedUser$.asObservable();

  isLoggedIn$ = this.loggedUser$.pipe(
    map(user => {
      return !!user
    })
  );

  login(credentials: ILoginCredentials): Observable<boolean> {
    return this.post('login', credentials).pipe(
      tap(tokens => this.doLoginUser(credentials.email, tokens)),
      mapTo(true)
    );
  }

  logout() {
    return this.post('logout', { refreshToken: this.getRefreshToken() }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true)
    );
  }

  refreshToken() {
    return this.post('refresh', { refreshToken: this.getRefreshToken() }).pipe(
      tap((tokens: IToken) => this.storeJwtToken(tokens.jwt))
    );
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  isLoggedIn(): boolean {
    return !!this.loggedUser$.value;
  }

  private doLoginUser(username: string, tokens: IToken) {
    this.loggedUser$.next(tokens.user);
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser$.next(null);
    this.removeTokens();
  }

  private storeTokens(tokens: IToken) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
    localStorage.setItem(this.USER, JSON.stringify(tokens.user));
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
    localStorage.removeItem(this.USER);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private getLogedUser() {
    return JSON?.parse(localStorage?.getItem(this.USER));
  }
}
