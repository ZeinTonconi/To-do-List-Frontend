import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag, TagResponse, Tags } from '../interfaces/tag.insterface';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  keyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiIwMUdORVlDWTFWVEY3VzY2TkY1WUYwWjJSMCIsImlhdCI6MTY4NzMwNzUyMywiZXhwIjoxNjg3NTY2NzIzfQ.BlGRGw7YrJhkcG4o3vxeGWxYjxn5jzUfZM8LYQlNcDY";
  configHeader = {
    keyToken: this.keyToken
  }

  url:string = "http://localhost:8080/api";
  constructor(private http:HttpClient) { }

  getTags(){
    return this.http.get<Tags>(`${this.url}/tag`, 
      {
        headers: this.configHeader
      }
    )
  }

  postTagToTask(idTag: string, idTask: string){
    return this.http.post<TagResponse>(`${this.url}/tasks/${idTask}/tag`,
    { idTag },
    { headers: this.configHeader });
  }

  postTag(tagName: string){
    return this.http.post<TagResponse>(`${this.url}/tag`,
    { tagName },
    { headers: this.configHeader });
  }
  
  putTag(newTag: string, id: string){
    return this.http.put<TagResponse>(`${this.url}/tag/${id}`,
    { newTag },
    { headers: this.configHeader })
  }
  
  deleteTag(id:string){
    return this.http.delete<TagResponse>(`${this.url}/tag/${id}`,
    { headers: this.configHeader })
  }


}
