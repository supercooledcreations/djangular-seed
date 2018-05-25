import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { StandardRegistration, StandardLogin, StandardUser } from './models';
// import { EmailRegistration, EmailLogin, EmailUser } from './models';

@Injectable()
export class AccountsService {

  private baseUrl = 'http://127.0.0.1:8000/api/'
  private nextUrl;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  createHeaders(){
    let headerData = {
      "Content-Type": "application/json"
    }

    let httpOptions = {
      headers: new HttpHeaders(headerData)
    }

    return httpOptions

  }

  getNextUrl(){
    this.activatedRoute.queryParams.subscribe(
      params=>{
        if (params['next']){
          this.nextUrl = params['next']
        }
      }
    )
  }

  register(registrationData: StandardRegistration): Observable<any>{
    let registerEndpoint = `${this.baseUrl}accounts/signup/`
    return this.http.post(registerEndpoint, registrationData, this.createHeaders())
  }

  requestLogin(loginData: StandardLogin): Observable<any>{
    let loginEndpoint = `${this.baseUrl}accounts/login/`
    return this.http.post(loginEndpoint, loginData, this.createHeaders())
  }

  successLogin(data){
    let userData = data as StandardUser
    let token = userData.token || null
    let date = new Date(userData.expires)

    this.cookieService.set('jwttoken', token, date, '/')

    console.log(data)

    // const nextUrl = this.getNextUrl()

    // if (nextUrl){
    //   this.router.navigate([nextUrl])
    // }
    // else{
    //   this.router.navigate(['/'])   
    // }

  }

  logout() {
    this.cookieService.delete('jwttoken', '/')
  }

  // refresh()

}
