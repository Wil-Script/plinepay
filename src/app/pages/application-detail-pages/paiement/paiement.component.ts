import { Component, OnInit } from '@angular/core';
import { Applicationservice } from 'src/app/services/application.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeStatservice } from 'src/app/services/Home.Stat.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementApplicationComponent {

  constructor(
    private applicationService: Applicationservice,
    private spinnerService: NgxSpinnerService,
    private homeStatsService: HomeStatservice
  ) {}
  name = '';
  balance = 0;
  percent = 0;
  stat = '';
  fees = false;
  img = '';
  key = '';
  appId = '';
  //infos homepage
  operations_number = '0';
  total_amount = '';
  success_operations = '0';
  amount_percent = 0.0;
  operation_percent = 0.0;
  success_operation_percent = 0.0;
  filterTime = 'THIS_MONTH';
  
  calculatePercentage(current: number, last: number) {
    return ((current * 100) / last);
  }
  getStatData(time: string) {
    this.spinnerService.show();
    this.homeStatsService.getHomeStats(time).subscribe((requestReponse) => {
      //(this.applicationList = requestReponse.applicationDtos)
      console.log(requestReponse);

      this.total_amount = requestReponse.total_amount;
      this.operations_number = requestReponse.operations_number;
      this.success_operations = requestReponse.success_operations;

      if (requestReponse.last_total_amount == 0) {
        this.amount_percent = 100;
      } else {
        this.amount_percent = this.calculatePercentage(
          requestReponse.total_amount,
          requestReponse.last_total_amount
        );
      }

      if (requestReponse.last_operations_number == 0) {
        this.operation_percent = 100;
      } else {
        this.operation_percent = this.calculatePercentage(
          requestReponse.operations_number,
          requestReponse.last_operations_number
        );
      }

      if (requestReponse.last_success_operations == 0) {
        this.success_operation_percent = 100;
      } else {
        this.success_operation_percent = this.calculatePercentage(
          requestReponse.success_operations,
          requestReponse.last_success_operations
        );
      }

      console.log(this.success_operations);

    });
    this.spinnerService.hide();
  }
}
