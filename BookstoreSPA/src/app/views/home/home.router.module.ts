import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeManagerComponent } from './home-manager/home-manager.component';

const routes: Routes = [
    {
        path: '',
        component: HomeManagerComponent
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutesModule {
}
