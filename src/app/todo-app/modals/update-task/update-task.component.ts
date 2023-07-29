import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../interfaces/category.interface';
import { Tag } from '../../interfaces/tag.insterface';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { TagService } from '../../services/tag.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styles: [
  ]
})
export class UpdateTaskComponent {

  categories:Category[]=[]
  
  taskForm:FormGroup = this.fb.group({
    name: ['', Validators.required],
    category: ['', Validators.required]
  })

  unusedTags: Tag[] = [];
  actualTags: Tag[] = [];

  constructor(private fb:FormBuilder,
              public dialogRef: MatDialogRef<UpdateTaskComponent>,
              categoryService:CategoryService,
              tagService:TagService,
              @Inject(MAT_DIALOG_DATA) public data: Task

    ){
      categoryService.getCategories().subscribe(({categories}) => this.categories = categories)
      this.taskForm.setValue({ name: data.description, category: data.category.id})
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
      // tags: this.actualTags

    }
  }
  isValidField(field:string){
    return this.taskForm.controls[field].errors
      && this.taskForm.controls[field].touched;
  }

}
