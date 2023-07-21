import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag, TagResponse, Tags } from '../interfaces/tag.insterface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  url:string = "http://localhost:8080/api";
  constructor(private http:HttpClient,
              private authService: AuthService
    ) { }

  getTags(){
    return this.http.get<Tags>(`${this.url}/tag`, 
      this.authService.getConfigHeader()
    )
  }

  postTagToTask(idTag: string, idTask: string){
    return this.http.post<TagResponse>(`${this.url}/tasks/${idTask}/tag`,
    { idTag },
    this.authService.getConfigHeader());
  }

  postTag(tagName: string){
    return this.http.post<TagResponse>(`${this.url}/tag`,
    { tagName },
    this.authService.getConfigHeader());
  }
  
  putTag(newTag: string, id: string){
    return this.http.put<TagResponse>(`${this.url}/tag/${id}`,
    { newTag },
    this.authService.getConfigHeader())
  }
  
  deleteTag(id:string){
    return this.http.delete<TagResponse>(`${this.url}/tag/${id}`,
    this.authService.getConfigHeader())
  }
}
