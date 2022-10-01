import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../auth/services/notification.service";
import {MatSnackBar } from "@angular/material/snack-bar";
import {AuthService} from "../auth/services/auth.service";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmaDialogComponent } from '../shared/confirma-dialog/confirma-dialog.component';
import { Nota } from '../shared/confirma-dialog/nota';
@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css'],
  providers: [AuthService],
})
export class RegisterProductComponent {



  constructor(private notification: NotificationService, public notificacion: MatSnackBar, public dialog: MatDialog) { }


  openDialog(){
    const dailog= this.dialog.open(ConfirmaDialogComponent, {
      data: new Nota('', '', true)
    });
  }

  /* Que hacer despues de cerrar el dialogo.
  dialogo1.afterClosed().subscribe(art => {
      if (art != undefined)
        this.agregar(art);
    });
  */




  // Permite lanzar una notificación.
  async showNotification(displayMessage: string, buttonText: string){
    this.notificacion.open(displayMessage, buttonText,{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }



}
