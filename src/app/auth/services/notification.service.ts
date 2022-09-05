import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  // Permite lanzar una notificación.
  async showNotification(displayMessage: string, buttonText: string){
    this.snackBar.open(displayMessage, buttonText,{
      duration: 1500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['style-notification']
    });
  }
}
