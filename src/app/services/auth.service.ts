import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { API_URL } from '../app.constantes';
import { Response } from '../models/response.model';
import { Otp, OtpResponse } from '../models/otp.model';
import { NotificationsService } from 'src/app/notifications/services/notifications.service';
import { Notification } from 'src/app/notifications/model/notification';

@Injectable({ providedIn: 'root' })
export class AuthService {
  notification = { title: 'Accès Refusé', 
        text: 'Email ou mot de passe incorrect.', 
        level: 'error', options: { timeout: 8 } 
  };
  notificationEchec = { title: 'Erreur', 
        text: 'Erreur Survenue.', 
        level: 'error', options: { timeout: 4 } 
  };
  notificationInscription = { title: 'Succès', 
    text: 'Compte crée avec succès', 
    level: 'success', options: { timeout: 6 } 
  };
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
    private SpinnerSevice: NgxSpinnerService,
    private _notificationsService: NotificationsService
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

  loginUser(data: any): void {
    this.SpinnerSevice.show();
    this.http
      .post<User>(`${API_URL}/auth/users/authenticate`, data)
      .subscribe(async (res: any) => {
        console.log(res);
        if (res.message.code == 200) {
          localStorage.setItem('userDto',JSON.stringify(res.userDto))
          this.cookieService.set('token', res.jwttoken);
          setTimeout(() => {
            this.SpinnerSevice.hide();
            this.router.navigate(['/dashboard']);
          }, 200);
        }
      },
      error =>{
        this.SpinnerSevice.hide();
        const n = new Notification(this.notification);
        return this._notificationsService.addNotification(n);
      }
      );
  }

  registerUser(user: any): void {
    this.SpinnerSevice.show();
    this.http
      .post(`${API_URL}/auth/users/add`, user)
      .subscribe((response:any) => {
        if (response.message.code == 201) {
          console.log('entrée ici détails user creation');
          
          console.log(response);
          localStorage.setItem('entityId', response.userDtos[0].id);
          localStorage.setItem('userEmail', response.userDtos[0].email);
          this.SpinnerSevice.hide();
          const n = new Notification(this.notificationInscription);
          this._notificationsService.addNotification(n);
          this.router.navigate(['/otp']);
        }
        this.SpinnerSevice.hide();
        this.router.navigate(['/otp']);
      },
      error =>{
        this.SpinnerSevice.hide();
        const n = new Notification(this.notificationEchec);
        return this._notificationsService.addNotification(n);
      }
      );
  }
  //recupération OTP
  callBackOtp(otp: string) {
    return this.http.post<Response>(`${API_URL}/auth/users/sendOtp`, {
      entityId: otp,
    });
  }
  enableAccount(data: any) {
    return this.http.post<OtpResponse>(`${API_URL}/auth/users/enable`, data);
  }
  //récupération du token
  getAuthToken(): string {
    return this.cookieService.get('token');
  }
}
