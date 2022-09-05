import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireMessaging} from "@angular/fire/compat/messaging";
import {BehaviorSubject, mergeMapTo} from "rxjs";
import {EmailService} from "./auth/services/email.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmailService],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  currentMessage= new BehaviorSubject<any>(null);

  constructor(public router: Router, private afMessaging: AngularFireMessaging, private emailService: EmailService) {}

  // Le pregunta al usuario si le permite mandar notificaciones.
  requestPermission() {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => { console.log('Permission granted! Save to the server!', token); }
        // Aqui deberia guardar el notificationToken para cada usuario.
        ,(error) => { console.error("ERROR. Failed to get token.", error); },
      );
  }

  getToken(){
    this.afMessaging.getToken.subscribe(res => console.log('Token:', res));
  }

 

  
  ngOnInit(): void {
    // Cada vez que entre un usuario nuevo a la pagina, se le pedira el permiso de notifcaiones.
   this.requestPermission();
  }
}





