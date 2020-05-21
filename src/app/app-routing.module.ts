import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Component/register/register.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Component/login/login.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { TestComponent } from './Component/test/test.component';
import { IconsComponent } from './Component/icons/icons.component';
import { NoteComponent } from './Component/note/note.component';
import { AddnoteComponent } from './Component/addnote/addnote.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'test',component:TestComponent},
  { path: 'icon',component:IconsComponent},
  { path: 'addnote',component: AddnoteComponent},
  { path: 'dashboard', component: DashboardComponent,

  children:[
    {path:'note',component:NoteComponent,
    }
  ]
},
];


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
