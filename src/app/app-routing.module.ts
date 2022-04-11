import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { BookinglistingComponent } from './bookinglisting/bookinglisting.component';
import { BookinghomeComponent } from './bookinghome/bookinghome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchlistingComponent } from './searchlisting/searchlisting.component';

const routes: Routes = [
  {path: '', component:BookinghomeComponent},
  {path: 'booking/:id', component:BookingComponent},
  {path: 'home',redirectTo:'/',pathMatch:'full'},
  {path: 'bookinglisting', component:BookinglistingComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'search', component:SearchlistingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }