import { Component, computed, inject, effect } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from './auth/interfaces/auth-status.enum';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private authService = inject( AuthService )
  private router = inject( Router )

  constructor() {
    effect(() => {
      console.log("Change Effect: ",this.authService.authStatus())
      if(this.authService.authStatus() == AuthStatus.authenticated){
        this.router.navigateByUrl('/todo/task')
      }
      else{
        this.router.navigateByUrl('/auth/login')
      }
    })
  }

  public finishedAuthChecking = computed<boolean>( () => {
    if(this.authService.authStatus() === AuthStatus.checking) {
      return false
    }

    return true
  })


  // public authStatusChangeEffect = effect(() => {

  //   console.log("Change Effect: ",this.authService.authStatus())
  //   if(this.authService.isAuthenticated()){
  //     this.router.navigateByUrl('/todo/task')
  //   }
  //   else{
  //     this.router.navigateByUrl('/auth/login')
  //   }
  //   // switch (this.authService.isAuthenticated()){
  //   //   case AuthStatus.checking:
  //   //     break;
  //   //   case AuthStatus.authenticated:
  //   //     this.router.navigateByUrl('/todo/task')
  //   //     break;
  //   //   case AuthStatus.notAuthenticated:
  //   //     this.router.navigateByUrl('/auth/login')
  //   //     break;
  //   // }
  // })
}
