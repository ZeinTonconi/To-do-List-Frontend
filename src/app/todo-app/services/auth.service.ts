import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  keyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiIwMUdORVlDWTFWVEY3VzY2TkY1WUYwWjJSMCIsImlhdCI6MTY4OTk0MTA4NSwiZXhwIjoxNjkwMjAwMjg1fQ.IidYLYP61BaG8cjNZFifz-4JnSEaF3Od0fU0AJ6i3rU"

  constructor() { }

  getConfigHeader(){
    return {
      headers: { keyToken: this.keyToken } 
    }
  }
}
