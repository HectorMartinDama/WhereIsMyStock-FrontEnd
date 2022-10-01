import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {CustoValidators} from "../../Public/custo-validators";
import {get} from "@angular/fire/database";
import { AuthService } from "../services/auth.service";
import {Router} from "@angular/router";
import {NotificationService} from "../services/notification.service";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import firebase from "firebase/compat/app";
import { EmailService } from '../services/email.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService, NotificationService]
})
export class RegisterComponent implements OnInit {

  // Controla que todos los campos del formulario son validos.
  form: FormGroup= new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    passwordConfirm: new FormControl(null, [Validators.required, Validators.minLength(6)])
  },

  // LLama a la validación passwordMatcing (Ruta: "Public/custom-validators")
  { validators: CustoValidators.passwordMatching }
  );

  constructor(private authSvc: AuthService, private router: Router, private emailService: EmailService) { }

  // LLama al metodo register (Ruta: services/auth).
  async register(){
    const {email, password} = this.form.value; // Extrae el email y la constraseña del formulario.
    const user= await this.authSvc.register(email, password);
    if (user){
      const usuario= await this.authSvc.getCurrentUser();
      if(usuario){
        this.authSvc.saveUser(usuario.uid, email)
      }
      this.emailService.welcomeEmail(email); // email de bienvenida
      // Redirecciona a la pagina de Verificación de Cuenta por email.
      this.router.navigate(['register/confirmAccount']);
    }
  }



  // Devuelve el email escrito en el formulario de Registro.
  get email(): FormControl{
    return this.form.get('email') as FormControl;
  }

  // Devuelve el nombre de usuario escrito en el formulario de Registro.
  get username(): FormControl{
    return this.form.get('username') as FormControl;
  }

  // Devuelve la contraseña escrita en el formulario de Registro.
  get password(): FormControl{
    return this.form.get('password') as FormControl;
  }

  // Devuelve la contraseña repetida escrita en el formulario de Registro.
  get passwordConfirm(): FormControl{
    return this.form.get('passwordConfirm') as FormControl;
  }

  ngOnInit(): void {}



}
