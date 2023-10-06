import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  keyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiIwMUdORVlDWTFWVEY3VzY2TkY1WUYwWjJSMCIsImlhdCI6MTY5NjYzMjE5NSwiZXhwIjoxNjk2ODkxMzk1fQ.BmYL9r8pNGoxo-rEf8ku_SGj0SwTtpqL_7TFY6zlbwg"

  constructor() { }

  getConfigHeader(){
    return {
      headers: { keyToken: this.keyToken } 
    }
  }
}
