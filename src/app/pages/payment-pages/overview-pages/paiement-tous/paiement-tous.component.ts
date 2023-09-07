import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Application } from 'src/app/models/application';
import { Applicationservice } from 'src/app/services/application.service';

@Component({
  selector: 'app-paiement-tous',
  templateUrl: './paiement-tous.component.html',
  styleUrls: ['./paiement-tous.component.css'],
})
export class PaiementTousComponent implements OnInit {
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
    this.getPaymentAll();
  }

  getPaymentAll() {
    this.SpinnerSevice.show();
    this.status = '';
    this.applicationService.getAllPayments().subscribe((response) => {
      this.paiments = response.payementDtoSearch.items;
      this.SpinnerSevice.hide();
    });
  }

  getPaymentStatus(status: string) {
    this.SpinnerSevice.show();
    this.status = status;
    this.applicationService
      .getAllPaymentsByStatus(status)
      .subscribe((response) => {
        this.paiments = response.payementDtoSearch.items;
        this.SpinnerSevice.hide();
      });
  }
}
