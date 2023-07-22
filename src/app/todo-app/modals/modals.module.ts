import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';

import { AddTagModalComponent } from './add-tag-modal/add-tag-modal.component';
import { MaterialModule } from '../../material/material.module';
import { EditTagModalComponent } from './edit-tag-modal/edit-tag-modal.component';
import { CreateTagModalComponent } from './create-tag-modal/create-tag-modal.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';



@NgModule({
  declarations: [
    AddTagModalComponent,
    EditTagModalComponent,
    CreateTagModalComponent,
    CreateTaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CdkDrag,
    CdkDropList,
  ]
})
export class ModalsModule { }
