import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Otp } from 'src/app/models/otp.model';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit{
  otp!:Otp;
  input1:string='';
  input2:string='';
  input3:string='';
  input4:string='';
  input5:string='';
  email!:string;
  constructor(private authService:AuthService,
    private SpinnerSevice:NgxSpinnerService,

    private router:Router){}
  
  ngOnInit(){
    this.email = localStorage.getItem("userEmail")||""
    this.otp=new Otp('','','','','');
  }
  getCodeOtp(){
    let data=localStorage.getItem("entityId")||''
    console.log(data);
    this.SpinnerSevice.show();
    this.authService.callBackOtp(data).subscribe(
      response =>{
        console.log(response);
        alert(`otp obtenu`)
        this.SpinnerSevice.hide();
      }
    )
  }

  inputRange = false;
 
  sendOtp(){
    let data ={
      entityId:localStorage.getItem("entityId"),
      otp:+(this.otp.number1+this.otp.number2+this.otp.number3+this.otp.number4+this.otp.number5)
    }
    this.authService.enableAccount(data).subscribe(
      response =>{
        console.log('response ',response);
        //if(response.status==200){
          localStorage.removeItem("entityId")
          localStorage.removeItem("userEmail")
          this.router.navigate(['login'])
        //}
      })
  }
}
