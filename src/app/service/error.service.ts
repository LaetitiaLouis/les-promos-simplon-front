import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Observable, of} from 'rxjs';

interface Error {
  error: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string, error: boolean) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
      panelClass: error ? 'error-dialog' : 'success-dialog'
    });
  }

  handleError(message?: string) {
    return (e: Error): Observable<any> => {
      this.openSnackBar(message || e.error, 'Ok', true);
      return of([]);
    };
  }
  handleSuccess(message?: string) {
    return (response): Observable<any> => {
      this.openSnackBar(message || response, 'Ok', false);
      return of([]);
    };
  }
}
