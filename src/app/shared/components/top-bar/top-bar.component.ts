import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from 'src/app/services/authGuard/authentication.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(private router: Router,
    private cookieService: CookieService,
    private authenticationService: AuthenticationService) {}
  route = this.router.url
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
