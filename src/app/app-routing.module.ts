import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Component/register/register.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Component/login/login.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNoteComponent } from './Component/add-note/add-note.component';
import { TestComponent } from './Component/test/test.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'test',component:TestComponent},
  { path: 'addnote',component:AddNoteComponent}
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
