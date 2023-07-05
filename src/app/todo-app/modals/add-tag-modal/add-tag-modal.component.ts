import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag } from '../../interfaces/tag.insterface';
import { TagService } from '../../services/tag.service';
import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList, transferArrayItem} from '@angular/cdk/drag-drop';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-tag-modal',
  templateUrl: './add-tag-modal.component.html',
  styles:[ ]
})
export class AddTagModalComponent {


  displayedColumns: string[] = ['actualTags','unusedTags'];

  allTags!: Tag[];

  unusedTags: Tag[] = [];
  actualTags: Tag[] = [];
  idTask: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data:{actualTags: Tag[], idTask:string},
              private tagService: TagService,
              private taskService: TaskService,
  ) {
    this.actualTags = data.actualTags;
    this.idTask = data.idTask;
    tagService.getTags().subscribe(({tags}) => {
      this.allTags = tags
      this.allTags.forEach(tag => {
        const unusedTag = this.actualTags.find((actualTag) => actualTag.tagName === tag.tagName)
        if(!unusedTag){
          this.unusedTags.push(tag);
        }
      })
    })
    
  }

  moverTag(event: CdkDragDrop<Tag[]>){
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }

  drop(event: CdkDragDrop<Tag[]>){
    const tag = event.previousContainer.data[event.previousIndex];
    console.log(event.previousContainer.data);
    if (event.previousContainer !== event.container) {
      if(this.actualTags.includes(tag)){
        this.taskService.removetag(this.idTask,tag.id).subscribe((res) => {
          this.moverTag(event);
        })
      }
      else{
        this.taskService.addTag(this.idTask, tag.id).subscribe((res) => {
          this.moverTag(event);
        })
      }
      
    }
  }
}
