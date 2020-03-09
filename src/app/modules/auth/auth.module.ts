import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    LandingComponent, 
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
