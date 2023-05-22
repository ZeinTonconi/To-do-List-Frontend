import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { EditTagModalComponent } from '../modals/edit-tag-modal/edit-tag-modal.component';
import { CategoryService } from '../services/category.service';
import { Category } from '../interfaces/category.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [
  ]
})
export class CategoryComponent {


  @ViewChild(MatTable) table!: MatTable<string>;
  categoryData:Category[]=[];
  displayedColumns:string[]=["nro","category","action"]

  constructor(private categoryService: CategoryService){

    categoryService.getCategories().subscribe( (result) => {
      this.categoryData=result.categories;
      this.table.renderRows();
    });
  }

  delete(tagPosition:number){
    // this.categoryData.splice(tagPosition,1);
    // this.table.renderRows();
  }

  edit(tagPosition:number){
    // const modal=this.editTagModal.open(EditTagModalComponent,{
    //   data:{
    //     tag: this.categoryData[tagPosition]
    //   }
    // })
    // modal.afterClosed().subscribe( (result:string) => {
    //   if(result){
    //     // this.categoryData[tagPosition]=result;
    //     // this.table.renderRows();
    //   }
    // })
  }

  openCreateTag(){

  }
}
