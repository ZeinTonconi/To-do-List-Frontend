import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      /*@use 'sass:map';
      @use '@angular/material' as mat;

       @mixin color($theme){
              
        $color-config: mat.get-color-config($theme);
        
        $primary-palette: map.get($color-config, 'primary');

        .card-container {
          height: 100%;
          background-color: mat.get-color-from-pallete($primary-palette,100)
        }

      }
       */

      .card-container {
          height: 100%;
          background-color: var(--bs-body-color);
        }
      
      .login-card {
        /* background: mat.get-color-from-palette($my-palette, 500); */
        /* color: mat.get-color-from-palette($my-palette, '500-contrast'); */
        height: 60%;
        width: 100%
      }
    `
  ]
})
export class LoginComponent {

}
