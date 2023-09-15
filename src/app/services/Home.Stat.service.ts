import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Response } from '../models/response.model';
import { API_URL } from '../app.constantes';

@Injectable({ providedIn: 'root' })
export class HomeStatservice {
  constructor(private http: HttpClient) {}

  configUrl = 'assets/config.json';

  getHomeStats(time: string): Observable<any> {
    return this.http
      .post<any>(`${API_URL}/applications/dashboard`, { filter: time })
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
