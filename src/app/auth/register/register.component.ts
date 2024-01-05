import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private authService = inject(AuthService)
  private router = inject(Router)

  private fb = inject(FormBuilder)

  public registerForm = this.fb.group({
    email: ['',[Validators.required]],
    password: ['',[Validators.required]],
    name: ['',[Validators.required]],
    
  })

  
  register(){
    const {email, password} = this.registerForm.value

    if(email && password) {
      this.authService.register(email, password)
      .subscribe( {
          next: success => {
          },
          error: errorMsg => {
            this.registerForm.setErrors({
              invalidUserPassword: true
            })
          }
      } )
    }
  }

  showMsgError(){
    return this.registerForm.errors
  }

  goToLogin(){
    this.router.navigateByUrl('/auth/login')
  }
}
