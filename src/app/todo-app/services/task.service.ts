import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  keyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiIwMUdORVlDWTFWVEY3VzY2TkY1WUYwWjJSMCIsImlhdCI6MTY4ODQ4NDQ0MSwiZXhwIjoxNjg4NzQzNjQxfQ.H1fdMY81aReHnwVCjg66u52853MXhMgJ0DqGEvEWOiU";
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
