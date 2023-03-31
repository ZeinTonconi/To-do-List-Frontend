import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { HomeComponent } from './home/home.component'
import { TagComponent } from './tag/tag.component';

const routes: Routes = [
  {
    path: '',
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
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'tag',
        component: TagComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoAppRoutingModule { }
