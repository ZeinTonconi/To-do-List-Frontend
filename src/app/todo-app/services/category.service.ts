import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories, CategoryResponse } from '../interfaces/category.interface';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  url:string = "http://localhost:8080/api";
  constructor(private http:HttpClient,
              private authService: AuthService
    ) { }

  getCategories(){
    return this.http.get<Categories>(`${this.url}/category`, 
      this.authService.getConfigHeader()
    )
  }

  postCategory(categoryName: string){
    return this.http.post<CategoryResponse>(`${this.url}/category`,
    { categoryName },
    this.authService.getConfigHeader());
  }
  
  putCategory(newCategory: string, id: string){
    return this.http.put<CategoryResponse>(`${this.url}/category/${id}`,
    { newCategory },
    this.authService.getConfigHeader())
  }
  
  deleteCategory(id:string){
    return this.http.delete<CategoryResponse>(`${this.url}/category/${id}`,
    this.authService.getConfigHeader())
  }


}
