import { Component } from '@angular/core';
import { TraderService } from 'src/app/services/trader.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-account-activation',
  templateUrl: './account-activation.component.html',
  styleUrls: ['./account-activation.component.css'],
})
export class AccountActivationComponent {
  constructor(
    private traderservice: TraderService,
    private spinnerSevice: NgxSpinnerService
  ) {}
  step = 0;
  mobilePayment = '';
  members = [];
  member = {
    name: '',
    surname: '',
    email: '',
  };
  company = {
    name: '',
    commercialRegister: '',
    phone: '',
    domainActivity: '',
    country: '',
    city: '',
    website: '',
    type: '',
  };
  payments = {
    mobiles: [],
    banks: [],
  };
  mobile = {
    agent: '',
    tel: '',
  };
  bank = {
    name: '',
    ibanNumber: '',
    countryBank: '',
  };

  setVar(type: string, value: string) {
    switch (type) {
      case 'company-name':
        this.company.name = value;
        break;

      case 'commercial-register':
        this.company.commercialRegister = value;
        break;
      case 'company-type':
        this.company.type = value;
        break;

      case 'company-tel':
        this.company.phone = value;
        break;

      case 'company-domain':
        this.company.domainActivity = value;
        break;

      case 'company-country':
        this.company.country = value;
        break;

      case 'company-city':
        this.company.city = value;
        break;

      default:
        break;
    }
  }
  next() {
    if (this.step < 3) this.step++;
  }
  selectMobilePayment(mean: string) {
    this.mobilePayment = mean;
  }
  addMember() {
    this.spinnerSevice.show();
  }
  setCompanyInfos() {
    this.spinnerSevice.show();
    this.traderservice
      .setCompanyInfos(this.company)
      .subscribe(async (res: any) => {
        console.log(res);
        this.spinnerSevice.hide();
        if (res.message.code == 200) {
          this.next();
        }
      });

    //
  }
}
