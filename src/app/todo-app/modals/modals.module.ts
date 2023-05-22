import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { AddTagModalComponent } from './add-tag-modal/add-tag-modal.component';
import { MaterialModule } from '../../material/material.module';
import { EditTagModalComponent } from './edit-tag-modal/edit-tag-modal.component';
import { CreateTagModalComponent } from './create-tag-modal/create-tag-modal.component';



@NgModule({
  declarations: [
    AddTagModalComponent,
    EditTagModalComponent,
    CreateTagModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModalsModule { }
