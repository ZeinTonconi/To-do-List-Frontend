import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  exports: [
    MatDialogModule,
    MatFormFieldModule 
  ]
})
export class MaterialModule { }
