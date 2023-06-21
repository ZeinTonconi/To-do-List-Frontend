import { Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { EditTagModalComponent } from '../modals/edit-tag-modal/edit-tag-modal.component';
import { CreateTagModalComponent } from '../modals/create-tag-modal/create-tag-modal.component';
import { HttpClient } from '@angular/common/http';

// Key Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiIwMUdORVlDWTFWVEY3VzY2TkY1WUYwWjJSMCIsImlhdCI6MTY4NDc2Mzk2NCwiZXhwIjoxNjg1MDIzMTY0fQ.ovbqAxXZKvWL5Lu9rNRrz0FRiDkBhpjYXUWLoy7rJM0

interface TagResponseGet {
  tags: Tag[];
}
interface Tag {
  id: string,
  tagName: string,
  id_user: string
}

interface TagResponse {
  msg: string,
  tag: Tag
}

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styles: [
  ]
})
export class TagComponent {

  tagData: Tag[]=[];
  @ViewChild(MatTable) table!: MatTable<string>;

  constructor(public editTagModal:MatDialog, 
              public createTagModal: MatDialog, 
              private http: HttpClient){
    this.http.get<TagResponseGet>
    ('http://localhost:8080/api/tag',
    {
      headers: {keyToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiIwMUdORVlDWTFWVEY3VzY2TkY1WUYwWjJSMCIsImlhdCI6MTY4NzMwNzUyMywiZXhwIjoxNjg3NTY2NzIzfQ.BlGRGw7YrJhkcG4o3vxeGWxYjxn5jzUfZM8LYQlNcDY"}
    })
    .subscribe((value)=> {
      this.tagData=value.tags;
      this.table.renderRows();
    })
  }

  
  displayedColumns:string[]=["nro","tag","action"]

  delete(tagPosition:number){

    const tag = this.tagData[tagPosition];
    this.http.delete(`http://localhost:8080/api/tag/${tag.id}`,
    {
      headers: {keyToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiIwMUdORVlDWTFWVEY3VzY2TkY1WUYwWjJSMCIsImlhdCI6MTY4NDc2Mzk2NCwiZXhwIjoxNjg1MDIzMTY0fQ.ovbqAxXZKvWL5Lu9rNRrz0FRiDkBhpjYXUWLoy7rJM0"}
    })
    .subscribe((tag) => {  
      this.tagData.splice(tagPosition,1);
      this.table.renderRows();      
    }, 
    // callback por error
    // navbar
    (error) => {
      console.log(error);
    })  
    

  }

  edit(tagPosition:number){
    const modal=this.editTagModal.open(EditTagModalComponent,{
      data:{
        tag: this.tagData[tagPosition].tagName
      }
    })
    
    const tag = this.tagData[tagPosition];

    modal.afterClosed().subscribe( result => {
      if(result){
        this.http.put(`http://localhost:8080/api/tag/${tag.id}`,
        {
          newTag: result
        },
        {
          headers: {keyToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiIwMUdORVlDWTFWVEY3VzY2TkY1WUYwWjJSMCIsImlhdCI6MTY4NDc2Mzk2NCwiZXhwIjoxNjg1MDIzMTY0fQ.ovbqAxXZKvWL5Lu9rNRrz0FRiDkBhpjYXUWLoy7rJM0"}
        }).subscribe( (res) => {
          this.tagData[tagPosition].tagName=result;
          this.table.renderRows();

        })
      }
    })
  }

  openCreateTag(){
    const createModal = this.createTagModal.open(CreateTagModalComponent);

    createModal.afterClosed().subscribe(result => {
      if(result){
        this.http.post('http://localhost:8080/api/tag',
        {
          tagName: result
        },
        {
          headers: {keyToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiIwMUdORVlDWTFWVEY3VzY2TkY1WUYwWjJSMCIsImlhdCI6MTY4NDc2Mzk2NCwiZXhwIjoxNjg1MDIzMTY0fQ.ovbqAxXZKvWL5Lu9rNRrz0FRiDkBhpjYXUWLoy7rJM0"}
        }).subscribe( (res:any) => {
          const {tag} = res;
          this.tagData.push(tag);
          this.table.renderRows();
        })
      }
    })
  }
}

