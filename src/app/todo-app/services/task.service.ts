import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks, Task, NewTask } from '../interfaces/task.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  keyToken = "";
  configHeader = {
    keyToken: this.keyToken
  }

  url:string = "http://localhost:8080";
  constructor(private http:HttpClient,
              private authService: AuthService
    ) { }

  getTasks(){
    return this.http.get<Tasks>(`${this.url}/api/tasks`,
    this.authService.getConfigHeader())
  }

  addTag(idTask:string, idTag:string) {
    return this.http.post<{msg:String, task:Task}>(`${this.url}/api/tasks/${idTask}/tag`,
      { idTag },
      this.authService.getConfigHeader()
    )
  }

  removetag(idTask:string, idTag:string) {
    const body = {idTag};
    const {headers} = this.authService.getConfigHeader();
    return this.http.delete<{msg: String, task: Task}>(`${this.url}/api/tasks/${idTask}/tag`, 
    {
      headers,
      body
    }
    )
  }

  createTask(task:string, idCategory:string){
    return this.http.post<NewTask>(`${this.url}/api/tasks/`,{
      descr: task,
      idCategory
    },this.authService.getConfigHeader())
  }
}
