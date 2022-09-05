import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthService} from "../auth/services/auth.service";
import {ThemeService} from "../auth/services/theme.service";
import { getAuth } from "firebase/auth";
import {UserInterface} from "../interface/user";
import {user} from "@angular/fire/auth";
import * as fs from "fs";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  providers: [AuthService, ThemeService],
})
export class MainNavComponent implements OnInit{

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private theme: ThemeService) {}

  // Variables.
  public user$: Observable<any>= this.authService.afAuth.user
  public icon: string= "light_mode"
  public isLogged: boolean= false;
  public profile: any;


  // Cambia la variable "profile" a true, si el usuario ha iniciado sesión con google.
  async profilePicture(){
    const usuario= await this.authService.getCurrentUser();
    if (usuario){
      if (usuario.photoURL) {
        this.profile = true;
      }else{
        this.profile= false;
      }
    }
  }

  // Cambia el tema de la pagina.
  changeTheme(){
    this.theme.changeTheme();
    this.setIcon();
  }

  // Cambia el icono del boton de modo oscuro segun el tema seleccionado.
  setIcon(){
    if (localStorage.getItem("theme") == "light"){
      this.icon="light_mode"
    }else{
      this.icon="dark_mode"
    }
  }

  // Imprime por pantalla la información del usuario.
  async informacionUsuario(){
    const usuario= await this.authService.getCurrentUser();
    if (usuario){
      console.log("Email: " + usuario.email);
      console.log("UID: " + usuario.uid);
    }
  }


  async ngOnInit(){
    this.theme.loadStorage();
    this.setIcon();
    await this.informacionUsuario();
    await this.profilePicture();
  }

  // Cierra la sesión.
  onLogout(){
    this.authService.logout();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
