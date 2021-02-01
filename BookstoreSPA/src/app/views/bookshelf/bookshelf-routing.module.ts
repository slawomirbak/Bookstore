import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLibraryComponent } from './user-library/user-library.component';


const routes: Routes = [
  {
      path: '',
      component: UserLibraryComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookshelfRoutingModule { }
