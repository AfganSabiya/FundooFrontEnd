import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Component/register/register.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Component/login/login.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword',component: ForgotpasswordComponent },
  { path: 'resetpassword',component: ResetpasswordComponent}
];

@NgModule({
  imports:[
  RouterModule,
  CommonModule,
  RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
