import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TagComponent } from '../tag/tag.component';
import { AddTagModalComponent } from '../modals/add-tag-modal/add-tag-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  
  sideItems = [
    {label: "Tasks", icon:"check_circle", url: 'task'},
    {label: "Tags", icon:"settings", url: 'tag'},
    {label: "Categories", icon: "add_circle_outline", url: 'category'}
  ]

 constructor (){}

  redirectTo(event:any){
    
    const router=inject(Router);
    router.navigate([event]);
    console.log(event);

  }
}
