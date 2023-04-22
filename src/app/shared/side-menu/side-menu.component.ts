import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent {
  
  sideItems = [
    {label: "Home", icon:"home"},
    {label: "Tasks", icon:"check_circle"},
    {label: "Settings", icon:"settings"}
  ]
}
