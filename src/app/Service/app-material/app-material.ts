import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
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
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatRadioModule} from '@angular/material/radio';
import { NgxSpinnerService } from "ngx-spinner";
@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
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
   NgxSpinnerService,
  ],
  providers: [
    
  ],
  bootstrap: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppMaterial { }
