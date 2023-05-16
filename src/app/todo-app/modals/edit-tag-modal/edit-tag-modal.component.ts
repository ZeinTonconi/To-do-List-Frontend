import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-tag-modal',
  templateUrl: './edit-tag-modal.component.html',
  styleUrls: []
})
export class EditTagModalComponent {

  tag:string='';

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    const {tag}=data;
    this.tag=tag;
  }

}
