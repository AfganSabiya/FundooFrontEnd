import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CreatenoteComponent } from './Component/createnote/createnote.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { TestComponent } from './Component/test/test.component';
import { DisplayNoteComponent } from './Component/display-note/display-note.component';
import { IconsComponent } from './Component/icons/icons.component';
import { NoteComponent } from './Component/note/note.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { TrashComponent } from './Component/trash/trash.component';
import { ArchiveComponent } from './Component/archive/archive.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UpdateNoteComponent } from './Component/update-note/update-note.component';
import { RemainderComponent } from './Component/remainder/remainder.component';
import { AccountService } from './Services/account.service';
import { NoteService } from './Services/note.service';
import { ProfilePicComponent } from './Component/profile-pic/profile-pic.component';
import { DataService } from './Services/data.service';
import { TestingComponent } from './Component/testing/testing.component';
import { SearchComponent } from './Component/search/search.component';
import { LabelComponent } from './Component/label/label.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ProfileComponent } from './profile/profile.component';
import { ImageprofileComponent } from './Component/imageprofile/imageprofile.component';
import { CollaboratorComponent } from './Component/collaborator/collaborator.component';
import { CollaboratorService } from './Services/collaborator.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    IconsComponent,
  CreatenoteComponent,
    TestComponent,
    DisplayNoteComponent,
    NoteComponent,
    TrashComponent,
    ArchiveComponent,
    UpdateNoteComponent,
    RemainderComponent,
    ProfilePicComponent,
    TestingComponent,
    SearchComponent,
    LabelComponent,
    ProfileComponent,
    ImageprofileComponent,
    CollaboratorComponent,
  
   ],
  imports: [
    FormsModule,
    BrowserModule,
    ImageCropperModule,
    FlexLayoutModule,
    HttpClientModule,
    MatExpansionModule,
    MatSelectModule,
    MatIconModule,
    AppRoutingModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatSnackBarModule, 
    RouterModule,
    MatDialogModule,
    MatSidenavModule,
    MatTooltipModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatChipsModule,
    BrowserAnimationsModule
  ],
  entryComponents:[UpdateNoteComponent,ProfilePicComponent,CollaboratorComponent],
  providers: 
  [
    AccountService,
    DataService,
    NoteService,
    CollaboratorService,
    {provide: MatDialogRef,useValue:{}},
    {provide: MAT_DIALOG_DATA,useValue:[]} ,
  ],
  bootstrap: [AppComponent],
  
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
