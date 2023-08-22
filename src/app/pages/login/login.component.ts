import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //providers: [AuthService],
})
export class LoginComponent implements OnInit{
  constructor(private authService: AuthService) {}
  user!:User

  ngOnInit(){
    this.user =new User("",0,'','','',0,'','','','','',false,0,'',0)
  }
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
