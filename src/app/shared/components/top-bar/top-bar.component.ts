import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(private router: Router,
    private cookieService: CookieService) {}
  route = this.router.url
  logout(){
    localStorage.removeItem('userDto');
    this.cookieService.delete('token');
    this.router.navigate(['/']);
  }
}
