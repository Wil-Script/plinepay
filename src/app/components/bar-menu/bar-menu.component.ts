import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authGuard/authentication.service';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.css'],
})
export class BarMenuComponent implements OnInit {
  user!: User;
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private authenticationService: AuthenticationService
  ) {}
  route = this.router.url;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userDto') || '');
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
