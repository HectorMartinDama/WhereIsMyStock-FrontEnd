import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Nota } from './nota';


@Component({
  selector: 'app-confirma-dialog',
  templateUrl: './confirma-dialog.component.html',
  styleUrls: ['./confirma-dialog.component.css']
})
export class ConfirmaDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmaDialogComponent>, @Inject (MAT_DIALOG_DATA) public data: Nota) { }


  // permite cerrar el dialogo
  onCancel(): void{
    this.dialogRef.close()
  }


}
