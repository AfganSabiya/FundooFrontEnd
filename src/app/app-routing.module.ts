import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Component/register/register.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Component/login/login.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports:[
  RouterModule,
  CommonModule,
  RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
