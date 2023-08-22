import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpInterceptorService implements HttpInterceptor{

  constructor(
    private authService:AuthService
   // private basicAuthenticationService : BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let token='Bearer '+this.authService.getAuthToken();
    

    if(token) { 
      request = request.clone({
        setHeaders : {
            Authorization : token
          }
        }) 
    }
    return next.handle(request);
  }
}
