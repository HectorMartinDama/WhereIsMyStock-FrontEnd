import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";
import firebase from "firebase/compat/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";


@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
  providers:[AuthService]
})
export class SendEmailComponent implements OnInit{

  // Variables
  phoneNumber: any
  reCaptchaVerifer: any

  constructor() { }

  ngOnInit(): void {}


  getOTP(){
    this.reCaptchaVerifer= new firebase.auth.RecaptchaVerifier('sign-button-phone', {size: 'invisible'})
    firebase.auth().signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifer).then((confirmationResults)=>{
      console.log(confirmationResults);
    })
  }





}
