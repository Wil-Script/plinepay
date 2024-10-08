import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Application } from 'src/app/models/application';
import { Applicationservice } from 'src/app/services/application.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  constructor(
    private SpinnerSevice: NgxSpinnerService,
    private applicationService: Applicationservice,
    private router: Router
  ) {}
  application = new Application('', '', false, 0, '', '');
  apps: Application[] = [];
  paiments: any[] = [];
  applicationSelected: any;
  status = '';
  route = this.router.url;

  ngOnInit() {
    this.SpinnerSevice.show();
    this.applicationService.getApplicationList().subscribe((response) => {
      this.apps = response.applicationDtos;
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
