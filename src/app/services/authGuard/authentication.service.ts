import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private cookieService:CookieService) { }
    isUserLoggedIn(){
      let user = localStorage.getItem('userDto')
      return !(user === null)
    }

  logout(){
    this.cookieService.delete('token')
    localStorage.removeItem('userDto')
  }
}
