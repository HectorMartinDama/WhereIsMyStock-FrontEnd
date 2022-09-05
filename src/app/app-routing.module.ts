import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {SendEmailComponent} from "./auth/send-email/send-email.component";
import {RegisterProductComponent} from "./register-product/register-product.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import {FooterComponent} from "./footer/footer.component";
import {ProductsComponent} from "./products/products.component";
const redirectUnautorizedToLogin  = () => redirectUnauthorizedTo(['']);


const routes: Routes= [

  { path: '', component: FooterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'register/confirmAccount', component: SendEmailComponent},
  { path: 'registerProduct', component: RegisterProductComponent},
  { path: 'products', component: ProductsComponent},
  { path: '**', component: PageNotFoundComponent} // Si la url es incorrecta, te redirreciona a la pagina principal.

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
