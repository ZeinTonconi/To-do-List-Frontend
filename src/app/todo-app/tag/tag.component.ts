import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styles: [
  ]
})
export class TagComponent {

  @ViewChild('myForm') myForm!:NgForm

  constructor(private dialog: MatDialogRef<TagComponent>){}
  
  tag:string = "";

  closeTag():void {
    console.log("closeTag")
    this.dialog.close();
  }
  addTag(): void {
    if(!this.tag) 
      return;
    console.log("Tag Created", this.tag);
    this.closeTag();
  }
}

