import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { BookinglistingComponent } from './bookinglisting/bookinglisting.component';
import { BookinghomeComponent } from './bookinghome/bookinghome.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { SearchlistingComponent } from './searchlisting/searchlisting.component';

const routes: Routes = [
  {path: '', component:BookinghomeComponent},
  {path: 'addbooking/:id', component:BookingComponent},
  {path: 'home',redirectTo:'/',pathMatch:'full'},
  {path: 'addlisting', component:BookinglistingComponent},
  {path: 'login', component:LoginComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'register', component:SignupComponent},
  {path: 'search', component:SearchlistingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }