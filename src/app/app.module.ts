import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
// Imports para conexión con Authentication de FireBase.
import { environment } from "../environments/environment";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import { ProductsComponent } from './products/products.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NgModule } from '@angular/core';
import { AngularFireMessagingModule} from '@angular/fire/compat/messaging';
// Imports Google Fuctions
import { AngularFireFunctionsModule } from "@angular/fire/compat/functions";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SendEmailComponent,
    RegisterProductComponent,
    PageNotFoundComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    AppRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    // Inicia la conexión con Authentication FireBase.
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MatMenuModule,
    MatGridListModule,
    MatSnackBarModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    // CloudMessing permite mandar notificaciones push.
    AngularFireMessagingModule,
    // Peticiones HTTP
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
