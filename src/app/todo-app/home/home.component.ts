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
  

  constructor (private dialog:MatDialog){}

  openDialog():void{
    const tagModal = this.dialog.open(TagComponent);
    tagModal.afterClosed().subscribe(result => {
      console.log('Modal was closed',result);

    })
  }
}
