import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoAppRoutingModule } from './todo-app-routing.module';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    TodoAppRoutingModule
  ]
})
export class TodoAppModule { }
