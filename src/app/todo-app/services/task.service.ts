import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  keyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiIwMUdORVlDWTFWVEY3VzY2TkY1WUYwWjJSMCIsImlhdCI6MTY4NzMwNzUyMywiZXhwIjoxNjg3NTY2NzIzfQ.BlGRGw7YrJhkcG4o3vxeGWxYjxn5jzUfZM8LYQlNcDY";
  configHeader = {
    keyToken: this.keyToken
  }

  url:string = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  getTasks(){
    return this.http.get<Tasks>(`${this.url}/api/tasks`,
    {headers: this.configHeader})
  }
}
