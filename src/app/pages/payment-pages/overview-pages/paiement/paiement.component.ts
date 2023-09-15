import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Application } from 'src/app/models/application';
import { Applicationservice } from 'src/app/services/application.service';
@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css'],
})
export class PaiementComponent implements OnInit {
  constructor(
    private SpinnerSevice: NgxSpinnerService,
    private applicationService: Applicationservice
  ) {}
  application = new Application('', '', false, 0, '', '');
  apps: Application[] = [];
  paiments: any[] = [];
  applicationSelected: any;
  status = '';

  ngOnInit() {
    this.SpinnerSevice.show();
    this.applicationService.getApplicationList().subscribe((response) => {
      this.apps = response.applicationDtos;
      console.log(this.apps);

      this.applicationSelected = this.apps[0]?.id;
      this.getPayment(this.applicationSelected);
    });
  }

  getPayment(id: string) {
    this.SpinnerSevice.show();
    this.status = '';
    this.applicationService.getSingleAppPayments(id).subscribe((response) => {
      this.paiments = response.payementDtoSearch.items;
      this.SpinnerSevice.hide();
    });
  }

  formatPrice(amount: any) {
    return new Intl.NumberFormat('bas-CM', {
      style: 'currency',
      currency: 'XOF',
    }).format(amount);
  }
  getPaymentStatus(id: string, status: string) {
    this.SpinnerSevice.show();
    this.status = status;
    this.applicationService
      .getAppPaymentByStatus(id, status)
      .subscribe((response) => {
        this.paiments = response.payementDtoSearch.items;
        this.SpinnerSevice.hide();
      });
  }
  //chargement des paiements de l'application sélectionnée
  loadPayments(idApp: any) {
    this.getPayment(idApp);
  }
}
