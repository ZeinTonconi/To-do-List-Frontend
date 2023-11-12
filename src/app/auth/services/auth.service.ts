import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { environment } from 'src/app/environments/environments';
import { User } from '../interfaces/user.interface';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response.interface';
import { CheckTokenResponse } from '../interfaces/check-token-response.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseURL = environment.baseURL;
  private http = inject(HttpClient);

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);
  
  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());
  public keyToken = computed(() => localStorage.getItem('keyToken'));

  
  constructor() { 
    this.checkStatus().subscribe()
  }

  getConfigHeader(){
    return new HttpHeaders()
    .set("keyToken", this.keyToken() ?? "")

    // return {
    //   headers: { keyToken: this.keyToken() } 
    // }
  }

  private setAuthentication(user: User, token: string): boolean {

    localStorage.setItem('keyToken',token);
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    // console.log("Set Authentication: ", this.authStatus())
    return true;
  }

  checkStatus(): Observable<boolean> {
    const url = `${ this.baseURL }api/auth/check-token`
    const token = localStorage.getItem("keyToken")
    if(!token){
      this.logout()
      return of(false)
    }
    const headers = new HttpHeaders().set('keyToken', `${token}`)

    return this.http.get<CheckTokenResponse>(url, {headers})
    .pipe(
      map( ({user, token}) => this.setAuthentication(user,token)),
      catchError( () => {
        this._authStatus.set(AuthStatus.notAuthenticated)
        return of(false)
      })
    )

  }

  logout(){
    localStorage.removeItem('keyToken')
    this._currentUser.set(null)
    this._authStatus.set(AuthStatus.notAuthenticated)
    // console.log("Logout", this.authStatus())
  }

  login(email: string, password: string): Observable<boolean> {

    const url = `${ this.baseURL }api/auth/login`;
    const body = {email, password}

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map( ({user, token}) => this.setAuthentication(user,token) ),
        catchError(err => throwError(() => err.error.message))
      );

  }

  private router = inject(Router)

  public authServiceAuthStatusChangeEffect = effect(() => {

    console.log("Change Effect: ",this.authStatus())
    switch (this.authStatus()){
      case AuthStatus.checking:
        break;
      case AuthStatus.authenticated:
        // console.log("Auth Service Effect: Authenticated")
        this.router.navigateByUrl('/todo/task')
        break;
      case AuthStatus.notAuthenticated:
        // console.log("Auth Service Effect: Not Authenticated")
        this.router.navigateByUrl('/auth/login')
        break;
    }
  })
}
