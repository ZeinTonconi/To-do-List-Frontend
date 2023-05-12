import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TagComponent } from '../tag/tag.component';
import { AddTagModalComponent } from '../modals/add-tag-modal/add-tag-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  
  sideItems = [
    {label: "Home", icon:"home", func: () => {}},
    {label: "Tasks", icon:"check_circle", func: () => {}},
    {label: "Settings", icon:"settings", func: () => {}},
    {label: "Create Tag", icon: "add_circle_outline", func: this.openDialog}
  ]


  displayedColumns: string[] = ['completed', 'task','tags','category'];

  taskData=[
    {task: "Ir a la U", completed: true, tags: ["Universidad","Estudio"], category: "Universidad"},
    {task: "Practicar la guitarra", completed: false, tags: ["Hobby","Creatividad","Musica","Guitarra"], category: "Guitarra"}
  ];

 constructor (private dialog:MatDialog, private addDialogTag:MatDialog){}

  openDialog():void{
    console.log(this.dialog)
    const tagModal = this.dialog.open(TagComponent);
    tagModal.afterClosed().subscribe(result => {
      console.log('Modal was closed',result);

    })
  }

  addTag(){
    console.log("Add Tag")

    this.addDialogTag.open(AddTagModalComponent,{
      data: ['Universidad','Hobby']
    });
    
  }
}
