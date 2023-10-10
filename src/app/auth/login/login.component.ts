import { Component } from '@angular/core';

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

}
