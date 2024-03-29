import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { SnackBarInfo } from 'src/app/core/services/snackbar-info.service';
import { BasketService } from 'src/app/core/services/basket.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  currentBasket$ = this.basketService.currentBasket$;
  isLoggedIn$ = this.userService.isLoggedIn$;
  isAdmin$ = this.userService.user$;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private snackBarInfo: SnackBarInfo,
    private basketService: BasketService) {}

  logout() {
    this.userService.logout().subscribe(
      ok => {
        this.snackBarInfo.formOk('User logged out sucessfully.');
      },
      error => {
        this.snackBarInfo.formError(error.statusText);
      }
    );
  }

}
