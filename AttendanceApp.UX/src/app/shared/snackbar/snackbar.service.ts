import { Injectable } from '@angular/core';
import { MatSnackBar, SimpleSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  showInfo(message: string) {
    return this.snackBar.open(message, 'Exit', {
      duration: 3000,
    });

  }

  showError(message: string) {
    return this.snackBar.open(message, '', {
      duration: 3000,
    });
  }
}
