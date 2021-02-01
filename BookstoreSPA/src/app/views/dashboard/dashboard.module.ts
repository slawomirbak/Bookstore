import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { DashboardAddBookComponent } from './dashboard-add-book/dashboard-add-book.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardAddAuthorComponent } from './dashboard-add-author/dashboard-add-author.component';


@NgModule({
  declarations: [DashboardManagerComponent, DashboardAddBookComponent, DashboardAddAuthorComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
