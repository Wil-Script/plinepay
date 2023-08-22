import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Application } from '../models/application';

@Injectable({ providedIn: 'root' })
export class Applicationservice {
  constructor(
    private http: HttpClient,
  ) {}

  configUrl = 'assets/config.json';
  private apiUrl = 'http://192.168.100.186:8086/api/applications/add';

  createApp(application: Application): void {
    this.http
      .post<Application>(this.apiUrl, application)
      .subscribe(async (res: any) => {
        console.log(res);
      });
  }
}
