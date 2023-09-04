import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, tap, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Response } from '../models/response.model';
import { API_URL } from '../app.constantes';

@Injectable({ providedIn: 'root' })
export class TraderService {
  constructor(private http: HttpClient, private router: Router) {}

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

  //envoie des informations d'une entreprise
  setCompanyInfos(data: any) {
    return this.http.post(`${API_URL}/traders/add/informations`, data);
  }

  //envoie des membres d'une entreprise
  setCompanyMembers(users: any) {
    let data = {
      dirigeants: users,
    };
    return this.http.post<User>(`${API_URL}/traders/add/dirigeants`, data);
  }
  //envoie des moyens de paiement supportés par l'entreprise
  setCompanyMoneyAccount(data: any) {
    return this.http.post<Response>(
      `${API_URL}/traders/add/compteReceptions`,
      data
    );
  }
  getMethodsPayment(): Observable<Response> {
    return this.http
      .post<Response>(`${API_URL}/paymentmethods/retrieve/all`, {})
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error))
      );
  }
  setDocuments(data: any) {
    console.log(data);

    return this.http.post<Response>(`${API_URL}/traders/add/documents`, data);
  }
  private log(response: any) {
    // console.table(response);
    console.log(response);
  }
}
