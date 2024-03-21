import { Component, Inject, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTagModalComponent } from '../modals/add-tag-modal/add-tag-modal.component';
import { TaskService } from '../services/task.service';
import { NewTask, Task } from '../interfaces/task.interface';
import { CreateTaskComponent } from '../modals/create-task/create-task.component';
import { MatTable } from '@angular/material/table';
import { Tag } from '../interfaces/tag.insterface';
import { UpdateTaskComponent } from '../modals/update-task/update-task.component';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TagService } from '../services/tag.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../interfaces/category.interface';
import { FilterBuilder } from './filters/filter.builder';
import { DateFilter } from '../interfaces/dateFilter.interface';
import { CompletedOrNot } from '../enum/completed.enum';
import { CreateTaskCommand } from './commands/createTask.command';
import { DeleteTaskCommand } from './commands/deleteTask.command';
import { Command } from './commands/command..abstract';
import { UpdateTaskCommand } from './commands/updateTask.command';

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

  
  tagControl: FormControl = new FormControl();
  categoryControl: FormControl = new FormControl();
  completed: FormControl = new FormControl<number>(0)
  
  dateRange = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  }); 
  
  filterForm: FormGroup = this.fb.group({
    tagFilter: this.tagControl,
    categorryFilter: this.categoryControl,
    dateRangeFilter: this.dateRange,
    completedFilter: this.completed
  })

  tags: Tag[] = []
  categories: Category[] = []

  constructor (
               private taskService:TaskService,
               private fb: FormBuilder,
               private tagService: TagService,
               private categorySerivce: CategoryService
               ){
    
    this.taskService.getTasks().subscribe( ({tasks}) => {
      this.taskData=tasks
      this.paginator.length=tasks.length
    })

    this.tagService.getTags().subscribe( ({tags}) => {
      this.tags = tags
    })

    this.categorySerivce.getCategories().subscribe( ({categories}) => {
      this.categories = categories
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

  executeCommand(command: Command){
    command.execute().subscribe( () => {
      this.table.renderRows();
    })
  }


  createTask(){

    this.createTaskDialog.open(CreateTaskComponent)
      .afterClosed().subscribe((newTask) =>{
        if(newTask){  

          const createTaskCommand = new CreateTaskCommand(newTask, this.taskData, this.taskService)
          this.executeCommand(createTaskCommand)

        }
      });
  }

  delete(index:number){

    const deleteTaskCommand = new DeleteTaskCommand(index, this.taskData, this.taskService)
    this.executeCommand(deleteTaskCommand)

  }

  changeCompleted(task:Task){
    this.taskService.completeTask(task.id).subscribe();
  }

  update(index: number){
    this.updateTaskDialog.open(UpdateTaskComponent,{data: this.taskData[index]})
      .afterClosed().subscribe((res) => {
        if(res){
          const updateTaskCommand = new UpdateTaskCommand(res, this.taskData, index, this.taskService)
          this.executeCommand(updateTaskCommand)
        }

      })
  }
  changePage(event:PageEvent){
   
    this.taskService.getTasksPagination(event.pageIndex, event.pageSize)
    .subscribe(({tasks}) => {
      this.taskData = tasks
    })
    

  }


  filterTasks(){
    const filter = new FilterBuilder()

    if(this.tagControl)
      filter.setTag(this.tagControl.value)

    if(this.categoryControl)
      filter.setCategory(this.categoryControl.value)

    if(this.completed.value === 0)
      filter.setCompleted(CompletedOrNot.Any)

    if(this.completed.value === 1)
      filter.setCompleted(CompletedOrNot.Completed)

    if(this.completed.value === 2)
      filter.setCompleted(CompletedOrNot.NoCompleted)


    this.taskService.getTasks().subscribe(({tasks}) => {
      this.taskData = filter.build().applyFilter(tasks);
      this.table.renderRows();
    })
  }

  clearFilter(){
    this.filterForm.reset()
    this.filterTasks()
  }
}
