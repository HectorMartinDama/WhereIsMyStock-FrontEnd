import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../auth/services/notification.service";
import {MatSnackBar } from "@angular/material/snack-bar";
import {AuthService} from "../auth/services/auth.service";

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css'],
  providers: [AuthService],
})
export class RegisterProductComponent {

  constructor(private notification: NotificationService, public notificacion: MatSnackBar) { }

  // Permite lanzar una notificación.
  async showNotification(displayMessage: string, buttonText: string){
    this.notificacion.open(displayMessage, buttonText,{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }



}
