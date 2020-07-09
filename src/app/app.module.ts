import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { AccountService } from './Service/account.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import { BookDashboardComponent } from './Component/book-dashboard/book-dashboard.component';
import { TestComponent } from './Component/test/test.component';
import { BookDisplayComponent } from './Component/book-display/book-display.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BookService } from './Service/book.service';
import { CartComponent } from './Component/cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartService } from './Service/cart.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {NgxPaginationModule} from 'ngx-pagination';
import { CustomerComponent } from './Component/customer/customer.component';
import {MatRadioModule} from '@angular/material/radio';

//import { NgxSpinnerService } from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BookDashboardComponent,
    TestComponent,
    BookDisplayComponent,
    CartComponent,
    NotFoundComponent,
    CustomerComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
   FormsModule,
   MatInputModule,
   ReactiveFormsModule,
   MatFormFieldModule,
   MatButtonModule,
   MatSnackBarModule,
   MatToolbarModule,
   MatListModule,
   MatMenuModule,
   MatSidenavModule,
   FlexLayoutModule,
   MatExpansionModule,
    MatIconModule,
    MatButtonToggleModule,
   MatDividerModule,
   MatTooltipModule,
   MatGridListModule,
   NgxPaginationModule,
   //NgxSpinnerService,
  ],
  providers: [
    AccountService,
    BookService,
    CartService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
