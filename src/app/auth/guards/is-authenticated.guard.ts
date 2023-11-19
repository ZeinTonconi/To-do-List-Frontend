import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces/auth-status.enum';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  

  const authService = inject(AuthService)

  console.log("Is Authenticated Guard:", authService.authStatus())

  if(authService.isAuthenticated())
    return true

  
  const router = inject(Router)
  router.navigateByUrl('/auth/login')
  return false
};
