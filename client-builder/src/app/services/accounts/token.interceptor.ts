import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private cookieService: CookieService,
    private router: Router,
    ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let csrftoken = this.cookieService.get('csrftoken')
    let jwttoken = this.cookieService.get('jwttoken')

    if (jwttoken){
        request = request.clone({
            setHeaders: {
                // This is where you can use your various tokens
                Authorization: `JWT ${jwttoken}`,
                // 'X-CSRFToken': `${csrftoken}`
            }
            });
    }
    
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401 || err.status === 403) {
          this.cookieService.delete('jwttoken')
          const currentUrl = this.router.url
          this.router.navigate(['/login'], {queryParams: {next: currentUrl}})
        }
      }
    });
  }
}