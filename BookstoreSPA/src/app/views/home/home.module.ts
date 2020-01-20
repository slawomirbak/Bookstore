import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeRoutesModule } from './home.router.module';
import { HomeBestsellerComponent } from './home-bestseller/home-bestseller.component';
import { HomeBookComponent } from './home-book/home-book.component';

@NgModule({
  declarations: [HomeManagerComponent, HomeBannerComponent, HomeBestsellerComponent, HomeBookComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutesModule
  ]
})
export class HomeModule { }
