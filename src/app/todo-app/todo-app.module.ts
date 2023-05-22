import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TodoAppRoutingModule } from './todo-app-routing.module';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { TagComponent } from './tag/tag.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { MaterialModule } from '../material/material.module';
import { ModalsModule } from './modals/modals.module';
import { TaskComponent } from './task/task.component';
import { CategoryService } from './services/category.service';


@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    TagComponent,
    ConfigurationComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    TodoAppRoutingModule,
    MaterialModule,
    FormsModule,
    ModalsModule,
    HttpClientModule
  ],
  providers: [
    CategoryService
  ]
})
export class TodoAppModule { }
