import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces/auth-status.enum';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService)
  const router = inject(Router)
  
  // console.log("Is not authenticated guard: ",authService.authStatus(), authService.currentUser())

  if(authService.isAuthenticated() ){
    router.navigateByUrl('/todo/task')
    return false
  }

  return true
};
