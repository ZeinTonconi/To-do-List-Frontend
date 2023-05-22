import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-tag-modal',
  templateUrl: './create-tag-modal.component.html',
  styles: [
  ]
})
export class CreateTagModalComponent {
  
  tagName:string=""

  constructor(
      private fb: FormBuilder,
      public dialogRef: MatDialogRef<CreateTagModalComponent>
    ){}

  closeTag(){
    this.dialogRef.close();
  }
}
