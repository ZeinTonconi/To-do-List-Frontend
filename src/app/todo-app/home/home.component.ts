import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  
  sideItems = [
    {label: "Home", icon:"home", func: () => {}},
    {label: "Tasks", icon:"check_circle", func: () => {}},
    {label: "Settings", icon:"settings", func: () => {}},
    {label: "Create Tag", icon: "add_circle_outline", func: this.openDialog}
  ]


  displayedColumns: string[] = ['completed', 'task'];

 constructor (private dialog:MatDialog){}

  openDialog():void{
    console.log(this.dialog)
    const tagModal = this.dialog.open(TagComponent);
    tagModal.afterClosed().subscribe(result => {
      console.log('Modal was closed',result);

    })
  }
}
