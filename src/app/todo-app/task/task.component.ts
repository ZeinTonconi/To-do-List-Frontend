import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTagModalComponent } from '../modals/add-tag-modal/add-tag-modal.component';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task.interface';
import { CreateTaskComponent } from '../modals/create-task/create-task.component';
import { MatTable } from '@angular/material/table';
import { Tag } from '../interfaces/tag.insterface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: [
  ]
})
export class TaskComponent {
  

  displayedColumns: string[] = ['completed', 'task','tags','category','action'];

  @ViewChild(MatTable) table!: MatTable<string>;

  taskData!:Task[];

  constructor (private addDialogTag:MatDialog, 
               private taskService:TaskService,
               private createTaskDialog:MatDialog){
    
    this.taskService.getTasks().subscribe( ({tasks}) => {
      this.taskData=tasks
      console.log(this.taskData)
    })
  }


  addTag(task:Task){

    this.addDialogTag.open(AddTagModalComponent,{
      data: {
        actualTags : task.tags,
        idTask: task.id
      }
      
    });
  }

  createTask(){

    this.createTaskDialog.open(CreateTaskComponent)
      .afterClosed().subscribe((newTask) =>{
        console.log(newTask);
        if(newTask){  
          this.taskService.createTask(newTask.name,newTask.category).subscribe((res)=>{
            console.log(res);
            const {description, id_category, id, status} = res.newTask;
            const {category} = res;  
            const tags:Tag[] = []
            newTask.tags.forEach((tag:Tag) => {
              this.taskService.addTag(id,tag.id);
              tags.push(tag)  
            });

            const task = {
              id, 
              description, 
              status, 
              id_category,
              category,
              tags
            }
            this.taskData.push(task);
            this.table.renderRows();
          });
        }
      });
  }

  delete(index:number){
    const task=this.taskData[index];
    this.taskService.deleteTask(task.id).subscribe((res)=> {
      this.taskData.splice(index,1);
      this.table.renderRows();
    })
  }

  changeCompleted(task:Task){
    this.taskService.completeTask(task.id).subscribe();
  }
}
