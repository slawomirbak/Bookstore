import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const angularMaterialModules = [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
];

@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    ...angularMaterialModules
  ],
  exports: [
    CommonModule,
    ...angularMaterialModules,
    MainNavComponent
  ]
})
export class SharedModule { }
