import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    SideMenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SharedModule { }
