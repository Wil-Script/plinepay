import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  user = {
    name: '',
    surname: '',
    username: '',
    phone: '',
    email: '',
    pays: '',
    ville: '',
    password: '',
    enable: false,
    roleId: 'f5b76116-cfa8-4793-95c2-7bb517176f3a',
    userType: 'USER',
  };
  setVar(type: string, value: string) {
    switch (type) {
      case 'email':
        this.user.email = value;
        break;

      case 'mdp':
        this.user.password = value;
        break;

      default:
        break;
    }
  };
  
  login() {
    if (this.user.password == '' || this.user.email == '') {
      return alert('Veuillez remplir tous les champs');
    }
    this.authService.loginUser(this.user);
  }
}
