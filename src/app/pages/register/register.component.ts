import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService],
})
export class RegisterComponent implements OnInit{
  constructor(private authService: AuthService) {}
  blockView = true;
  allFieldComplete = false;
  user!:User;

  ngOnInit(){
    this.user =new User("",0,'','','',0,'','','','','',false,0,'',0)
  }
  /*user = {
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
  };*/
  passwordVerification = '';

  setVar(type: string, value: string) {
    switch (type) {
      case 'nom':
        this.user.name = value;
        break;

      case 'prenom':
        this.user.surname = value;
        break;

      case 'tel':
        this.user.phone = +value;
        break;

      case 'email':
        this.user.email = value;
        break;

      case 'pays':
        this.user.pays = value;
        break;

      case 'ville':
        this.user.ville = value;
        break;
      case 'username':
        this.user.username = value;
        break;

      case 'mdp':
        this.user.password = value;
        break;

      case 'mdp2':
        this.passwordVerification = value;
        break;

      default:
        break;
    }
    this.checkField();
  }
  next() {
    const emailRegex = new RegExp(
      /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
      'gm'
    );
    //let checkEmail = emailRegex.test(this.user.password);
    let checkEmail = emailRegex.test(this.user.email);
    if (
      this.user.name == '' ||
      this.user.surname == '' ||
      this.user.phone == +'' ||
      this.user.email == ''
    ) {
      return alert('Veuillez remplir tous les champs');
    } else if (!checkEmail) {
      return alert('Adresse email invalide');
    } else {
      this.blockView = false;
    }
  }
  //remplissage step1 form register
  prev(){
    this.blockView = true;
  }
  register() {
    if (
      this.user.name == '' ||
      this.user.surname == '' ||
      this.user.phone == +'' ||
      this.user.email == ''
    ) {
      return alert('Veuillez remplir tous les champs');
    } else if (this.user.password !== this.passwordVerification) {
      return alert('Les Mots de passe ne correspondent pas');
    } else {
      this.user.enable=false;
      let data={
        name:this.user.name, surname:this.user.surname,
        phone:this.user.phone, email:this.user.email, username:this.user.username,
        password:this.user.password, enable:false
      }
      this.authService.registerUser(data);
    }
  }
  checkField() {
    if (
      this.user.name == '' ||
      this.user.surname == '' ||
      this.user.phone == +'' ||
      this.user.password == '' ||
      this.passwordVerification == '' ||
      this.user.email == ''
    ) {
      this.allFieldComplete = false;
    } else {
      this.allFieldComplete = true;
    }
  }
}
