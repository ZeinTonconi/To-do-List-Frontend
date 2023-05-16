import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTagModalComponent } from '../modals/add-tag-modal/add-tag-modal.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: [
  ]
})
export class TaskComponent {
  

  displayedColumns: string[] = ['completed', 'task','tags','category'];

  taskData=[
    {task: "Ir a la U", completed: true, tags: ["Universidad","Estudio"], category: "Universidad"},
    {task: "Practicar la guitarra", completed: false, tags: ["Hobby","Creatividad","Musica","Guitarra"], category: "Guitarra"}
  ];

  constructor (private addDialogTag:MatDialog){}


  addTag(){
    console.log("Add Tag")

    this.addDialogTag.open(AddTagModalComponent,{
      data: ['Universidad','Hobby']
    });
    
  }
}
