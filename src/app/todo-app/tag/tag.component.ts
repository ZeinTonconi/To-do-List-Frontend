import { Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { EditTagModalComponent } from '../modals/edit-tag-modal/edit-tag-modal.component';
import { CreateTagModalComponent } from '../modals/create-tag-modal/create-tag-modal.component';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styles: [
  ]
})
export class TagComponent {


  @ViewChild(MatTable) table!: MatTable<string>;

  constructor(public editTagModal:MatDialog, public createTagModal: MatDialog){}

  tagData=[
    "Universidad",
    "Casa",
    "Guitar"
  ]
  displayedColumns:string[]=["nro","tag","action"]

  delete(tagPosition:number){
    this.tagData.splice(tagPosition,1);
    this.table.renderRows();
  }

  edit(tagPosition:number){
    const modal=this.editTagModal.open(EditTagModalComponent,{
      data:{
        tag: this.tagData[tagPosition]
      }
    })
    modal.afterClosed().subscribe( result => {
      if(result){
        this.tagData[tagPosition]=result;
        this.table.renderRows();
      }
    })
  }

  openCreateTag(){
    const createModal = this.createTagModal.open(CreateTagModalComponent);

    createModal.afterClosed().subscribe(result => {
      if(result){
        this.tagData.push(result);
        this.table.renderRows();
      }
    })
  }
}

