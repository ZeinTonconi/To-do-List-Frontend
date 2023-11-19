import { Component, inject } from '@angular/core';
// import Swal from 'sweetalert2'


import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      .card-container {
          height: 100%;
          background-color: var(--bs-body-color);
        }
      
      .login-card {
        height: 60%;
        width: 100%;
        align-items: center;
      }

      h2 {
          font-size: 20px;
          font-weight: 500;
          line-height: 32px;
          font-family: Roboto, sans-serif;
          letter-spacing: .0125em;
          margin: 0 0 16px;
          color: #B3B3B3;
      }
      .mat-grid-tile {
        font-family: Roboto, sans-serif;
        color: #B3B3B3;
      }
      
  
    `
  ]
})
export class LoginComponent {

  private authService = inject(AuthService)
  private router = inject(Router)

  private fb = inject(FormBuilder)

  public loginForm = this.fb.group({
    email: ['',[Validators.required]],
    password: ['',[Validators.required]]
  })

  
  login(){
    const {email, password} = this.loginForm.value

    if(email && password) {
      this.authService.login(email, password)
      .subscribe( {
          next: success => {
            // console.log("Login Component redirect to todo/task")
            // this.router.navigateByUrl('todo/task')
          },
          error: errorMsg => {
            this.loginForm.setErrors({
              invalidUserPassword: true
            })
          }
      } )
    }
  }

  showMsgError(){
    return this.loginForm.errors
  }

}


