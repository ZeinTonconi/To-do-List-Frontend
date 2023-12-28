import { Component, Inject, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTagModalComponent } from '../modals/add-tag-modal/add-tag-modal.component';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task.interface';
import { CreateTaskComponent } from '../modals/create-task/create-task.component';
import { MatTable } from '@angular/material/table';
import { Tag } from '../interfaces/tag.insterface';
import { UpdateTaskComponent } from '../modals/update-task/update-task.component';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: [
  ]
}) 
export class TaskComponent {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['completed', 'task','tags','category','action'];

  @ViewChild(MatTable) table!: MatTable<string>;

  taskData!:Task[];

  private addDialogTag = inject(MatDialog)
  private createTaskDialog = inject(MatDialog)
  private updateTaskDialog = inject(MatDialog)

  constructor (
    //private addDialogTag:MatDialog, 
               private taskService:TaskService,
    //private createTaskDialog:MatDialog,
               //private updateTaskDialog:MatDialog
               ){
    
    this.taskService.getTasks().subscribe( ({tasks}) => {
      this.taskData=tasks
      this.paginator.length=tasks.length
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
        if(newTask){  
          this.taskService.createTask(newTask.name,newTask.category).subscribe((res)=>{
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

  update(index: number){
    this.updateTaskDialog.open(UpdateTaskComponent,{data: this.taskData[index]})
      .afterClosed().subscribe((res) => {
        if(res){
          const newDescription = res.name;
          const newCategory = res.category;
          const task = this.taskData[index];
          this.taskService.updateTask(task.id,newDescription,newCategory).subscribe((task) => {

            this.taskData[index].description = newDescription;
            this.taskData[index].category = task.category;
            this.table.renderRows();
          })

          
        }

      })
  }
  changePage(event:PageEvent){
    
    const resDiv = event.pageIndex
    const div = event.pageSize

    this.taskService.getTasks().subscribe( ({tasks}) => {
      this.taskData = tasks.filter((_, index) => Math.floor(index/div) == resDiv)
    })

  }
}
