import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NotificationService} from "../services/notification.service";
import {Observable} from "rxjs";
// Imports Google Functions

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, NotificationService],
})
export class LoginComponent implements OnInit {


  // Variables
  hide=true;
  public user$: Observable<any>= this.authSvc.afAuth.user

  // Controla que todos los campos del formulario son validos.
  form: FormGroup= new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });

  constructor(public authSvc: AuthService, private router: Router, private notification: NotificationService) { }

  // Inicio sesión con correo y contraseña.
  async login(){
    const { email, password } = this.form.value;
    const user= await this.authSvc.login(email, password);
    // Si el usuario ha iniciado sesión, se le redirije a la home page.
    if (user){
      // Redirecciona al pagina principal.
      this.router.navigate(['/'])
      this.notification.showNotification("Hola de nuevo!!! "  , "");
    }
  }

  // Inicio de sesion con GitHub.
  async loginGithub(){
    this.authSvc.loginWithGitHub();
  }



  ngOnInit(): void {}
}
