import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutes } from './router';

@NgModule({
  declarations: [HomeManagerComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutes
  ]
})
export class HomeModule { }
