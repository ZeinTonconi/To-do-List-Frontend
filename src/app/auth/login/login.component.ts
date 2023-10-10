import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    `
  ]
})
export class LoginComponent {
  private fb = inject(FormBuilder)

  public loginForm = this.fb.group({
    user: ['',[Validators.required]],
    password: ['',[Validators.required]]
  })

  login(){
    console.log(this.loginForm.value)
  }
}
