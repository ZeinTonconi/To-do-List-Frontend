import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories, CategoryResponse } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  keyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiIwMUdORVlDWTFWVEY3VzY2TkY1WUYwWjJSMCIsImlhdCI6MTY4ODQ4NDQ0MSwiZXhwIjoxNjg4NzQzNjQxfQ.H1fdMY81aReHnwVCjg66u52853MXhMgJ0DqGEvEWOiU";
  configHeader = {
    keyToken: this.keyToken
  }

  url:string = "http://localhost:8080/api";
  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get<Categories>(`${this.url}/category`, 
      {
        headers: this.configHeader
      }
    )
  }

  postCategory(categoryName: string){
    return this.http.post<CategoryResponse>(`${this.url}/category`,
    { categoryName },
    { headers: this.configHeader });
  }
  
  putCategory(newCategory: string, id: string){
    return this.http.put<CategoryResponse>(`${this.url}/category/${id}`,
    { newCategory },
    { headers: this.configHeader })
  }
  
  deleteCategory(id:string){
    return this.http.delete<CategoryResponse>(`${this.url}/category/${id}`,
    { headers: this.configHeader })
  }


}
