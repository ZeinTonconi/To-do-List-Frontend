import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Tasks, Task, NewTask } from '../interfaces/task.interface';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  keyToken = "";
  configHeader = {
    keyToken: this.keyToken
  }

  url:string = "http://localhost:8080";

  private http = inject(HttpClient)

  constructor(
    //private http:HttpClient,
              private authService: AuthService
    ) { }

  getTasks(){
    return this.http.get<Tasks>(`${this.url}/api/tasks`, {
      headers: this.authService.getConfigHeader()
    })
  }

  addTag(idTask:string, idTag:string) {
    return this.http.post<{msg:String, task:Task}>(`${this.url}/api/tasks/${idTask}/tag`,
      { idTag },
      { headers: this.authService.getConfigHeader() }
    )
  }

  removetag(idTask:string, idTag:string) {
    const body = {idTag};
    const headers = this.authService.getConfigHeader();
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
    },{
      headers: this.authService.getConfigHeader()
    }
)
  }

  deleteTask(idTask:string){
    return this.http.delete<{msg:string}>(`${this.url}/api/tasks/${idTask}`,
    {
      headers: this.authService.getConfigHeader()
    })
  }

  completeTask(idTask: string){
    return this.http.put<{msg:String, task:Task}>(`${this.url}/api/tasks/${idTask}/complete`,
    {},
    {
      headers: this.authService.getConfigHeader()
    })
  }

  updateTask(idTask:string, newDescri:string, newCategory:string){
    return this.http.put<NewTask>(`${this.url}/api/tasks/${idTask}`,
    {newDescri, newCategory},
    {
      headers: this.authService.getConfigHeader()
    })
  }

  
}

