import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { DashboardAddBookComponent } from './dashboard-add-book/dashboard-add-book.component';


const routes: Routes = [
  {
    path: 'add-book',
    component: DashboardAddBookComponent
  },
  {
    path: '',
    component: DashboardManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
