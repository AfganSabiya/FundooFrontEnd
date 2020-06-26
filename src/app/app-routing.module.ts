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
import { TrashComponent } from './Component/trash/trash.component';
import { ArchiveComponent } from './Component/archive/archive.component';
import { RemainderComponent } from './Component/remainder/remainder.component';
import { CreatenoteComponent } from './Component/createnote/createnote.component';
import { DisplayNoteComponent } from './Component/display-note/display-note.component';
import { TestingComponent } from './Component/testing/testing.component';
import { ProfileComponent } from './profile/profile.component';
import { ImageprofileComponent } from './Component/imageprofile/imageprofile.component';
import { LabelComponent } from './Component/label/label.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'test',component:TestComponent},
  {path: 'image',component:ImageprofileComponent},
  { path: 'icon',component:IconsComponent},
  { path: 'createnote',component:CreatenoteComponent},
  {path: 'displaynote',component:DisplayNoteComponent},
  {path: 'testing',component:TestingComponent},
  {path: 'profile',component:ProfileComponent},
  { path: 'dashboard', component: DashboardComponent,
  children:[
    {path:'note',component:NoteComponent},
    {path:'trashList',component:TrashComponent},
    {path:'archiveList',component:ArchiveComponent},
    {path:'Reminders',component:RemainderComponent}
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
