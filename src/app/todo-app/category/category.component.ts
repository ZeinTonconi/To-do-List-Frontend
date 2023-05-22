import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { EditTagModalComponent } from '../modals/edit-tag-modal/edit-tag-modal.component';
import { CategoryService } from '../services/category.service';
import { Category } from '../interfaces/category.interface';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private categoryService: CategoryService,
              private editCategoryModal: MatDialog){

    categoryService.getCategories().subscribe( (result) => {
      this.categoryData=result.categories;
      this.table.renderRows();
    });
  }

  delete(categoryPosition:number){
    const category = this.categoryData[categoryPosition];
    this.categoryService.deleteCategory(category.id).subscribe( (response) => {
      this.categoryData.splice(categoryPosition,1);
      this.table.renderRows();
    })

  }

  edit(categoryPosition:number){
    const modal=this.editCategoryModal.open(EditTagModalComponent,{
      data:{
        tag: this.categoryData[categoryPosition].categoryName
      }
    })

    const category = this.categoryData[categoryPosition];

    modal.afterClosed().subscribe( (result:string) => {
      if(result){

        this.categoryService.putCategory(result,category.id).subscribe( (response) => {
          this.categoryData[categoryPosition].categoryName=result;
          this.table.renderRows();  
        })

      }
    })
  }

  openCreateTag(){

  }
}
