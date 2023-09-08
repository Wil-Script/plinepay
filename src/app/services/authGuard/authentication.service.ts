import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private cookieService:CookieService,
    private router:Router) { }
    isUserLoggedIn(){
      let user = localStorage.getItem('userDto')
      return !(user === null)
    }

  logout(){
    this.cookieService.delete('token')
    localStorage.removeItem('userDto')
    this.router.navigate(["/"])
  }
}
