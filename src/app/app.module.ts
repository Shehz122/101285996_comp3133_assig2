import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { ViewlistingComponent } from './viewlisting/viewlisting.component';
import { BookinglistingComponent } from './bookinglisting/bookinglisting.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchlistingComponent } from './searchlisting/searchlisting.component';
import { GraphmodelsComponent } from './graphmodels.service';
import { LogoutComponent } from './logout/logout.component';
import { BookinghomeComponent } from './bookinghome/bookinghome.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    ViewlistingComponent,
    BookinglistingComponent,
    LoginComponent,
    SignupComponent,
    SearchlistingComponent,
    GraphmodelsComponent,
    LogoutComponent,
    BookinghomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
