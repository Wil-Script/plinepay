import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { API_URL } from '../app.constantes';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  constructor(private http: HttpClient) {}
  paymentObject = {
    operationType: '',
    statusPayment: '',
    traderAccountId: '',
    applicationId: '',
    paymentMethodId: '',
    statusApplication: '',
    startDate: '',
    endDate: '',
    firstResult: '0', //page
    maxResults: '10', // size
  };
  getSingleAppPayments(id: string): Observable<any> {
    this.paymentObject.applicationId = id;
    return this.http
      .post<any>(`${API_URL}/payments/retrieve`, this.paymentObject)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }
  getSinglePayment(id: string): Observable<any> {
    let data = {
      transactionId: id,
      operationType: 'ONLINE_PAYMENT',
    };
    return this.http.post<any>(`${API_URL}/payments/retrieve/one`, data).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }
  getAllPayments(): Observable<any> {
    this.paymentObject.applicationId = '';
    this.paymentObject.statusPayment = '';
    return this.http
      .post<any>(`${API_URL}/payments/retrieve`, this.paymentObject)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }
  getAllPaymentsByStatus(status: string): Observable<any> {
    this.paymentObject.statusPayment = status;
    this.paymentObject.applicationId = '';
    return this.http
      .post<any>(`${API_URL}/payments/retrieve`, this.paymentObject)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }
  getAppPaymentByStatus(id: string, status: string): Observable<any> {
    this.paymentObject.statusPayment = status;
    this.paymentObject.applicationId = id;
    return this.http
      .post<any>(`${API_URL}/payments/retrieve`, this.paymentObject)
      .pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
  private log(response: any) {
    // console.table(response);
    console.log(response);
  }
}
