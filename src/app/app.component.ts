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

  }

  public finishedAuthChecking = computed<boolean>( () => {
    if(this.authService.authStatus() === AuthStatus.checking) {
      return false
    }

    return true
  })

}
