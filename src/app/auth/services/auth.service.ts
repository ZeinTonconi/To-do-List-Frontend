import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'src/app/environments/environments';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseURL = environment.baseURL;
  private http = inject(HttpClient);

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<String>(null);
  
  keyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiIwMUdORVlDWTFWVEY3VzY2TkY1WUYwWjJSMCIsImlhdCI6MTY5NjYzMjE5NSwiZXhwIjoxNjk2ODkxMzk1fQ.BmYL9r8pNGoxo-rEf8ku_SGj0SwTtpqL_7TFY6zlbwg"

  constructor() { }

  getConfigHeader(){
    return {
      headers: { keyToken: this.keyToken } 
    }
  }
}
