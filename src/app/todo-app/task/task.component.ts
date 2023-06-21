import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTagModalComponent } from '../modals/add-tag-modal/add-tag-modal.component';
import { TaskService } from '../services/task.service';
import { Task, Tasks } from '../interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: [
  ]
})
export class TaskComponent {
  

  displayedColumns: string[] = ['completed', 'task','tags','category'];

  taskData!:Task[];

  constructor (private addDialogTag:MatDialog, 
               private taskService:TaskService){
    
    this.taskService.getTasks().subscribe( ({tasks}) => {
      this.taskData=tasks
      console.log(this.taskData)
    })
  }


  addTag(){
    console.log("Add Tag")

    this.addDialogTag.open(AddTagModalComponent,{
      data: ['Universidad','Hobby']
    });
    
  }
}
