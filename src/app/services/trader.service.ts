import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { API_URL } from '../app.constantes';

@Injectable({ providedIn: 'root' })
export class TraderService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
    private SpinnerSevice: NgxSpinnerService
  ) {}

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

  setCompanyInfos(data: any){
    return this.http.post(`${API_URL}/traders/add`, data);
  }

  setCompanyMembers(user: any): void {
    this.SpinnerSevice.show();
    this.http
      .post<User>(`${API_URL}/auth/users/add`, user)
      .subscribe((response) => {
        if (response.status == 201) {
          console.log(response);
          localStorage.setItem('entityId', response.id);
          localStorage.setItem('userEmail', user.email);
          this.SpinnerSevice.hide();
          this.router.navigate(['/otp']);
        }
      });
  }
  //recupération OTP
  setCompanyMoneyAccount(otp: string) {
    return this.http.post<Response>(`${API_URL}/auth/users/sendOtp`, {
      entityId: otp,
    });
  }
}
