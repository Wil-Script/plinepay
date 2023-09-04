import { Component, OnInit } from '@angular/core';
import { TraderService } from 'src/app/services/trader.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Response } from 'src/app/models/response.model';
import { Router } from '@angular/router';

interface Member {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-account-activation',
  templateUrl: './account-activation.component.html',
  styleUrls: ['./account-activation.component.css'],
})
export class AccountActivationComponent implements OnInit {
  requestReponse!: Response[];
  paymentList: any[] = [];
  constructor(
    private traderservice: TraderService,
    private router: Router,
    private spinnerSevice: NgxSpinnerService // private memberItem: member
  ) {}
  members: Member[] = [];
  member = {
    name: '',
    surname: '',
    email: '',
    phone: '',
  };
  step = 0;
  mobilePayment = '';
  company = {
    name: '',
    phone: '',
    domainActivity: '',
    country: '',
    city: '',
    website: '',
    type: '',
    companyRegistrationDate: '',
  };
  bank = {
    nomBanque: '',
    numIbamCompte: '',
    localisationBanque: '',
    nomTitulaireCompte: '',
  };
  mobile = {
    paymentMethodId: '',
    phoneNumber: '',
  };
  payments = {
    payementMobiles: [this.mobile],
    payementBancaires: [this.bank],
  };
  documents = {
    commercialRegister: '',
    idNumberCardRectoUrl: '',
    idNumberCardVersoUrl: '',
    attestaionDomitiliationBancaire: '',
    statusEntreprise: '',
    carteContribuable: '',
    nie: '',
  };
  checkCompanyInfos() {
    if (
      this.company.name == '' ||
      this.company.domainActivity == '' ||
      this.company.type == '' ||
      this.company.country == '' ||
      this.company.city == '' ||
      this.company.website == '' ||
      this.company.companyRegistrationDate == ''
    ) {
      return false;
    } else if (!this.phoneNumberChecker(this.company.phone)) {
      return false;
    } else {
      return true;
    }
  }
  checkMemberInfos() {
    if (this.company.name == '') {
      return false;
    } else if (!this.phoneNumberChecker(this.company.phone)) {
      return false;
    } else {
      return true;
    }
  }
  ngOnInit(): void {
    this.getMethodsPayment();
  }
  phoneNumberChecker(phone: string) {
    let number = phone.trim();
    if (number.length <= 8) return false;
    return true;
  }
  inputTextChecker(text: any) {
    if (text.length <= 1) return false;
    return true;
  }
  selectMobilePayment(mean: string, idCode: string) {
    this.mobilePayment = mean;
    this.mobile.paymentMethodId = idCode;
  }
  addMember() {
    if (this.member.name == '' || this.member.surname == '') {
      return alert('Veuillez remplir tous les champs');
    } else if (!this.phoneNumberChecker(this.member.phone)) {
      return alert('Numéro de téléphone invalide');
    } else {
      let data = {
        name: this.member.name,
        surname: this.member.surname,
        email: this.member.email,
        phone: this.member.phone,
      };
      this.members = [...this.members, data];
      this.member.name =
        this.member.surname =
        this.member.phone =
        this.member.email =
          '';
    }
  }
  setMember() {
    this.spinnerSevice.show();
    this.traderservice
      .setCompanyMembers(this.members)
      .subscribe(async (res: any) => {
        console.log(res);
        this.spinnerSevice.hide();
        if (res.message.code == 200 || res.message.code == 201) {
          this.step = 2;
        }
      });
  }
  setCompanyInfos() {
    if (!this.checkCompanyInfos()) {
      return alert('Completez toutes les informations');
    }
    this.spinnerSevice.show();
    this.traderservice
      .setCompanyInfos(this.company)
      .subscribe(async (res: any) => {
        console.log(res);
        this.spinnerSevice.hide();
        if (res.message.code == 200 || res.message.code == 201) {
          this.step = 1;
        }
      });
  }
  getMethodsPayment() {
    this.traderservice.getMethodsPayment().subscribe(async (requestReponse) => {
      this.paymentList = requestReponse.paymentMethodDtos;
    });
  }
  setCompanyMoneyAccount() {
    this.spinnerSevice.show();
    this.traderservice
      .setCompanyMoneyAccount(this.payments)
      .subscribe(async (res: any) => {
        console.log(res);
        this.spinnerSevice.hide();
        if (res.message.code == 200 || res.message.code == 201) {
          this.router.navigate(['/dashboard']);
        }
      });
  }
  setDocuments() {
    this.traderservice
      .setDocuments(this.documents)
      .subscribe(async (res: any) => {
        console.log(res);
        this.spinnerSevice.hide();
        if (res.message.code == 200 || res.message.code == 201) {
          this.step = 3;
        }
      });
  }
  goStep2() {
    if (
      this.company.name == '' ||
      this.company.domainActivity == '' ||
      this.company.type == '' ||
      this.company.country == '' ||
      this.company.city == '' ||
      this.company.website == '' ||
      this.company.companyRegistrationDate == ''
    ) {
      return alert('Veullez remplir toutes les informations');
    } else if (!this.phoneNumberChecker(this.company.phone)) {
      alert('Le numéro de téléphone est invalide');
    } else {
      this.step = 1;
    }
  }
  goStep3() {
    if (!this.members.length) {
      alert('Veuillez renseigner au moins un dirigeant');
    } else {
      this.step = 2;
    }
  }
  goStep4() {
    if (
      this.documents.commercialRegister == '' ||
      this.documents.idNumberCardRectoUrl == '' ||
      this.documents.idNumberCardVersoUrl == '' ||
      this.documents.attestaionDomitiliationBancaire == '' ||
      this.documents.statusEntreprise == '' ||
      this.documents.carteContribuable == ''
    ) {
      alert('Veuillez renseigner tous les documents necessaires.');
    } else {
      this.step = 3;
    }
  }

  getImage(fileInput: any, docType: any) {
    const file: File = fileInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (e: any) => {
      switch (docType) {
        case 'registreCommerce':
          this.documents.commercialRegister = e.target.result;
          break;
        case 'cniRecto':
          this.documents.idNumberCardRectoUrl = e.target.result;
          break;
        case 'cniVerso':
          this.documents.idNumberCardVersoUrl = e.target.result;
          break;
        case 'domiciliation':
          this.documents.attestaionDomitiliationBancaire = e.target.result;
          break;
        case 'status':
          this.documents.statusEntreprise = e.target.result;
          break;
        case 'contribuable':
          this.documents.carteContribuable = e.target.result;
          break;
        case 'niu':
          this.documents.nie = e.target.result;
          break;

        default:
          break;
      }
      console.log(this.documents);
    });
    reader.readAsDataURL(file);
  }
}
