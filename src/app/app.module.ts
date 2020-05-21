import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
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
import {MatGridListModule} from '@angular/material/grid-list';
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
import { CreatenoteComponent } from './Component/createnote/createnote.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { TestComponent } from './Component/test/test.component';
import { DisplayNoteComponent } from './Component/display-note/display-note.component';
import { IconsComponent } from './Component/icons/icons.component';
import { NoteComponent } from './Component/note/note.component';
import { AddnoteComponent } from './Component/addnote/addnote.component';

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
    AddnoteComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatExpansionModule,
    MatSelectModule,
    MatIconModule,
    AppRoutingModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatSnackBarModule, 
    RouterModule,
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
