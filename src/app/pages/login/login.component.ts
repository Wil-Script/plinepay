import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authGuard/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //providers: [AuthService],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService,
    private authenticationService:AuthenticationService,
    private router:Router) {}
  user!:User
 
 
  ngOnInit(){
    if(this.authenticationService.isUserLoggedIn()){
      this.router.navigate(['dashboard'])
    }
    this.user =new User("",0,'','','',0,'','','','','',false,0,'',0,'')
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
    let data={
      email:this.user.email,
      password:this.user.password
    }
    this.authService.loginUser(data);
  }
}
