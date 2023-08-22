import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { InputComponent } from './components/input/input.component';
import { CreateAppComponent } from './components/create-app/create-app.component';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { OtpComponent } from './pages/otp/otp.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { OverviewComponent } from './pages/payment-pages/overview/overview.component';
import { FraudComponent } from './pages/payment-pages/fraud/fraud.component';
import { PaymentLinkComponent } from './pages/payment-pages/payment-link/payment-link.component';
import {
  LucideAngularModule,
  AppWindow,
  Link2,
  AlertTriangle,
  ImagePlus, X
} from 'lucide-angular';
import { RapportComponent } from './pages/rapport/rapport.component';
import { FactureComponent } from './pages/facture/facture.component';
import { AuthHttpInterceptorService } from './services/auth-http-interceptor.service';
import { AccountActivationComponent } from './pages/account-activation/account-activation.component';
import { ActivateAccountModalComponent } from './components/activate-account-modal/activate-account-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    InputComponent,
    OtpComponent,
    PaymentComponent,
    OverviewComponent,
    FraudComponent,
    PaymentLinkComponent,
    RapportComponent,
    FactureComponent,
    CreateAppComponent,
    AccountActivationComponent,
    ActivateAccountModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    FormsModule,
    LucideAngularModule.pick({ AppWindow, Link2, AlertTriangle, ImagePlus, X }),
  ],
  providers: [
    CookieService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthHttpInterceptorService,multi:true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
