import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  keyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiIwMUdORVlDWTFWVEY3VzY2TkY1WUYwWjJSMCIsImlhdCI6MTY5MDU5NzI3NCwiZXhwIjoxNjkwODU2NDc0fQ.7XTwXzEqNbuOmfuC_Eds_5ZCzorEIMSvgFJjN24_UPM"

  constructor() { }

  getConfigHeader(){
    return {
      headers: { keyToken: this.keyToken } 
    }
  }
}
