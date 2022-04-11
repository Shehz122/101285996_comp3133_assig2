import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Server } from './server.module';
import { HttpClientModule } from '@angular/common/http';
import { BookinghomeComponent } from './bookinghome/bookinghome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchlistingComponent } from './searchlisting/searchlisting.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { BookinglistingComponent } from './bookinglisting/bookinglisting.component'
import { ViewlistingComponent } from './viewlisting/viewlisting.component';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatMenuModule} from '@angular/material/menu'


@NgModule({
  declarations: [
    AppComponent,
    BookinghomeComponent,
    SearchlistingComponent,
    ViewlistingComponent,
    LoginComponent,
    SignupComponent,
    BookingComponent,
    BookinglistingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Server,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatStepperModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }