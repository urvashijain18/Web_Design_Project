import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { AddbeneficiaryComponent } from './addbeneficiary/addbeneficiary.component';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { RegisterComponent } from './signup/register/register.component';
import { LoginComponent } from './login/login-component/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonateCovidComponent } from './donate-covid/donate-covid.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CcDashComponent } from './cc-dash/cc-dash.component';
import { CustomercareComponent } from './customercare/customercare.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'register', component: RegisterComponent,},
  { path: 'beneficiary', component: BeneficiaryComponent },
  { path: 'addbeneficiary', component: AddbeneficiaryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ccdashboard', component: CcDashComponent },
  { path: 'donatecovid', component: DonateCovidComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'complaints', component: CustomercareComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
