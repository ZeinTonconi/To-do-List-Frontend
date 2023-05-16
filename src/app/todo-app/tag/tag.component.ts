import { Component, ViewChild} from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styles: [
  ]
})
export class TagComponent {


  @ViewChild(MatTable) table!: MatTable<string>;

  tagData= [
    "Universidad",
    "Casa",
    "Guitar"
  ]
  displayedColumns:string[]=["nro","tag","action"]

  delete(tagPosition:number){
    this.tagData.splice(tagPosition,1);
    this.table.renderRows();
  }

  
}

