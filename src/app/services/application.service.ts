import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Response } from '../models/response.model';
import { Application } from '../models/application';
import { API_URL } from '../app.constantes';

@Injectable({ providedIn: 'root' })
export class Applicationservice {
  constructor(private http: HttpClient) {}

  configUrl = 'assets/config.json';

  createApp(application: Application) {
    return this.http.post<Application>(
      `${API_URL}/applications/add`,
      application
    );
  }
  getApplicationList(): Observable<Response> {
    return this.http
      .post<Response>(`${API_URL}/applications/retrieve/all`, {})
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
