import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { OtpComponent } from './pages/otp/otp.component';
import { RapportComponent } from './pages/rapport/rapport.component';
import { FactureComponent } from './pages/facture/facture.component';
import { OverviewComponent } from './pages/payment-pages/overview/overview.component';
import { FraudComponent } from './pages/payment-pages/fraud/fraud.component';
import { PaymentLinkComponent } from './pages/payment-pages/payment-link/payment-link.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'otp', component: OtpComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'paiement',
        component: PaymentComponent,
        children: [
          {
            path: '',
            component: OverviewComponent,
          },
          {
            path: 'fraude',
            component: FraudComponent,
          },
          {
            path: 'lien-payment',
            component: PaymentLinkComponent,
          },
        ],
      },
      {
        path: 'rapport',
        component: RapportComponent,
      },
      {
        path: 'facture',
        component: FactureComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
