import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';


@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService:CookieService
  ) {}

  configUrl = 'assets/config.json';
  private baseUrl='http://192.168.100.186:8086/'
  private registerUrl = this.baseUrl+'api/auth/users/add';
  private loginUrl = 'http://192.168.100.186:8086/api/auth/users/authenticate';
  private otpUrl = this.baseUrl+'api/auth/users/sendOtp';
  private enableUrl = this.baseUrl+'api/auth/users/enable';

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  loginUser(user: User): void {
   this.http.post<User>(this.loginUrl, user).subscribe(async (res: any) => {
      console.log(res);
      if (res.message.code == 200) {
        this.cookieService.set('token', res.jwttoken);
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 200);
      }
    });
  }

  registerUser(user: any): void {
    this.http.post<User>(this.registerUrl, user).subscribe(
      response =>{
        if(response.status==201){
          console.log(response);
          localStorage.setItem('entityId',response.id);
          localStorage.setItem('userEmail',user.email);
          this.router.navigate(['/otp']);
        }
      }
    )
  }
  //recupération OTP
  calBackOtp(otp:string){
    return this.http.post<Response>(this.otpUrl,{entityId:otp})
  }
  enableAccount(data:any){
    return this.http.post<Response>(this.enableUrl,data)
  }
  //récupération du token
  getAuthToken():string {
    return this.cookieService.get('token');
  }
}
