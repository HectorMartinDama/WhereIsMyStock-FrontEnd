import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  /*welcomeEmail(){
    const body= new URLSearchParams();
    body.set("to", "hectormartindama@gmail.com");
    const headers= new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const options= {headers: headers};
    return this.http.post('http://localhost:3000/send', body, options).subscribe((res)=>{
      console.log(res);
    });
  }*/

  welcomeEmail(emailClient: string){
    return this.http.post('http://localhost:3000/serviceEmail/welcomeEmail', {to: emailClient}).subscribe((res)=>{
      console.log(res);
    });
  }
}
