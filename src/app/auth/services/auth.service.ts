import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from 'src/app/environments/environments';
import { User } from '../interfaces/user.interface';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { Observable, catchError, map, throwError } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseURL = environment.baseURL;
  private http = inject(HttpClient);

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.notAuthenticated);
  
  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());
  public keyToken = computed(() => localStorage.getItem('keyToken'));

  
  constructor() { 

  }

  getConfigHeader(){
    return new HttpHeaders()
    .set("keyToken", this.keyToken() ?? "")

    // return {
    //   headers: { keyToken: this.keyToken() } 
    // }
  }

  private setAuthentication(user: User, token: string): Boolean {

    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('keyToken',token);
    return true;
  }

  login(email: string, password: string): Observable<Boolean> {

    const url = `${ this.baseURL }api/auth/login`;
    const body = {email, password}

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map( ({user, token}) => this.setAuthentication(user,token) ),
        catchError(err => throwError(() => err.error.message))
      );

  }

}
