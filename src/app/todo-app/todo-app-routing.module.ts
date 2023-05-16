import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { HomeComponent } from './home/home.component'
import { TagComponent } from './tag/tag.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children: [
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'config',
        component: ConfigurationComponent
      },
      {
        path: 'task',
        component: TaskComponent
      },
      {
        path: 'tag',
        component: TagComponent
      },
      {
        path: '',
        redirectTo: "task",
        pathMatch: "full"
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoAppRoutingModule { }
