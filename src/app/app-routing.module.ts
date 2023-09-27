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
import { AccountActivationComponent } from './pages/account-activation/account-activation.component';
import { PaiementComponent } from './pages/payment-pages/overview-pages/paiement/paiement.component';
import { PaiementTousComponent } from './pages/payment-pages/overview-pages/paiement-tous/paiement-tous.component';
import { LitigesComponent } from './pages/payment-pages/overview-pages/litiges/litiges.component';
import { RouteGuardService } from './services/routeGuard/route-guard.service';
import { ApplicationDetailComponent } from './pages/application-detail/application-detail.component';
import { StatistiqueApplicationComponent } from './pages/application-detail-pages/statistique/statistique.component';
import { PaiementApplicationComponent } from './pages/application-detail-pages/paiement/paiement.component';
import { OverviewApplicationComponent } from './pages/application-detail-pages/overview/overview.component';
import { PaiementDetailComponent } from './pages/paiement-detail/paiement-detail.component';
import { CreateLinkComponent } from './pages/create-link/create-link.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'activation', component: AccountActivationComponent },
  { path: 'create-link', component: CreateLinkComponent },
  {
    path: 'application/:id',
    component: ApplicationDetailComponent,
    children: [
      {
        path: '',
        component: OverviewApplicationComponent,
      },
      {
        path: 'statistique',
        component: StatistiqueApplicationComponent,
      },
      {
        path: 'paiement',
        component: PaiementApplicationComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [RouteGuardService],
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
            children: [
              {
                path: '',
                component: PaiementComponent,
              },
              {
                path: 'tous',
                component: PaiementTousComponent,
              },
              {
                path: 'litiges',
                component: LitigesComponent,
              },
            ],
          },
          {
            path: 'paiement-detail/:id',
            component: PaiementDetailComponent,
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
      {
        path: 'paiement-detail/:id',
        component: PaiementDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
