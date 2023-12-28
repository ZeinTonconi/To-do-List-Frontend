import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TagComponent } from '../tag/tag.component';
import { AddTagModalComponent } from '../modals/add-tag-modal/add-tag-modal.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

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

  private authService = inject(AuthService)
  private router = inject(Router)
  
  redirectTo(event:any){
    
    const router=inject(Router);
    router.navigate([event]);
    console.log(event);

  }

  logout(){
    this.authService.logout()
  }
}
