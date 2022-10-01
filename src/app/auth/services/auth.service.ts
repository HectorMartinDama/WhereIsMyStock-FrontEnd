import {Injectable, NgZone} from '@angular/core';
import {catchError, first, Observable} from "rxjs";
// Imports para conexión con Authentication de FireBase.
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import {Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import { EmailService } from './email.service';
// Import para peticiones http.
import { HttpClient } from '@angular/common/http';
import { idToken } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, public afs: AngularFireStorage, public router: Router, private emailService: EmailService, private http: HttpClient){}

  // Inicia sesión.
  async login(email: string, password: string){
      const result= await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
  }

  // Realiza el registro en la app con correo y constraseña.
  async register(email:string, password:string){
    const result= await this.afAuth.createUserWithEmailAndPassword(email, password);
    // LLamo al metodo para que cada vez que se registre un nuevo usuario le envie el correo.
    return result;
  }

  // Guardar usuario en la base de datos
  saveUser(uid: string, email: string){
    return this.http.post('http://localhost:3000/api/users', {uid: uid, email: email}).subscribe((res)=>{
      console.log(res)
    })
  }


  // Envia una email de verifacion cuando se registra un nuevo usuario.
  SendVerificationMail(){
    return this.afAuth.currentUser.then((u: any) => u.sendEmailVerification())
      .then(() =>{
        this.router.navigate(['register/confirmAccount'])
      });
  }

  // Permite iniciar sesion con la cuenta de Google.
  loginWithGoogle() {
    return this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  // Permite inciar sesion con la cuenta de Github.
  loginWithGitHub(){
    this.afAuth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  // Cierra la sesión.
  async logout(){
    await this.afAuth.signOut();
  }

  // Recupera el usuario actualmente logeado.
  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

}
