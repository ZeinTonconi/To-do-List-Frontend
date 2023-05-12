import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTagModalComponent } from './add-tag-modal/add-tag-modal.component';
import { MaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [
    AddTagModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ModalsModule { }
