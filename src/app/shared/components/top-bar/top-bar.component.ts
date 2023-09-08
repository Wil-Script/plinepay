import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authGuard/authentication.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  user!:User
  constructor(private router: Router,
    private cookieService: CookieService,
    private authenticationService: AuthenticationService) {}
  route = this.router.url
  
  ngOnInit(){
    this.user = JSON.parse(localStorage.getItem("userDto")||'');
  }
  
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
