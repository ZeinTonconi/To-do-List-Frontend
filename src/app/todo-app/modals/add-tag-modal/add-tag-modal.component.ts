import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-tag-modal',
  templateUrl: './add-tag-modal.component.html',
  styles:[ ]
})
export class AddTagModalComponent {


  displayedColumns: string[] = ['actualTags','unusedTags'];


  constructor(@Inject(MAT_DIALOG_DATA) public actualTags: string[]) {
    
    
  }

}
