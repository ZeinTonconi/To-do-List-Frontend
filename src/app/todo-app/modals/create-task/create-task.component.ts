import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../interfaces/category.interface';
import { Tag } from '../../interfaces/tag.insterface';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { TagService } from '../../services/tag.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styles: [
  ]
})
export class CreateTaskComponent {
  categories:Category[]=[]
  
  taskForm = this.fb.group({
    name: [''],
    category: [''],
    // tags: this.fb.array([
    //   this.fb.control('')
    // ])
  })

  unusedTags: Tag[] = [];
  actualTags: Tag[] = [];

  constructor(private fb:FormBuilder,
              public dialogRef: MatDialogRef<CreateTaskComponent>,
              categoryService:CategoryService,
              tagService:TagService,

    ){
      categoryService.getCategories().subscribe(({categories}) => this.categories = categories)
      tagService.getTags().subscribe(({tags}) => this.unusedTags=tags);
  }
  drop(event: CdkDragDrop<Tag[]>){
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }

  cancel(){
    this.dialogRef.close();
  }

  createTask(){
    return {
      name: this.taskForm.controls['name'].value,
      category: this.taskForm.controls['category'].value,
      tags: this.actualTags

    }
  }

}
