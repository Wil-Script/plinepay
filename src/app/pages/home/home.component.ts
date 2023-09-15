import { Component, OnInit } from '@angular/core';
import { Applicationservice } from 'src/app/services/application.service';
import { Application } from 'src/app/models/application';
import { Response } from 'src/app/models/response.model';
import { User } from 'src/app/models/user.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeStatservice } from 'src/app/services/Home.Stat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  requestReponse!: Response;
  applicationList: Application[] = [];
  user!: User;
  app: object = {};
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

  constructor(
    private applicationService: Applicationservice,
    private spinnerService: NgxSpinnerService,
    private homeStatsService: HomeStatservice
  ) {}
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userDto') || '');
    this.applicationService.getApplicationList().subscribe((requestReponse) => {
      this.applicationList = requestReponse.applicationDtos;
      console.log(this.applicationList);

      this.getStatData(this.filterTime);
    });

    setTimeout(() => {
      console.log(this.applicationList);
    }, 1000);
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
  createAppVisible = false;
  activeAccountVisible = true;
  viewApp = false;

  showCreateApp() {
    this.createAppVisible = true;
  }
  calculatePercentage(current: number, last: number) {
    return ((current * 100) / last);
  }
  hideCreateApp() {
    this.createAppVisible = false;
  }
  hideAccountActivationPop() {
    this.activeAccountVisible = false;
  }
  hideAppDetail() {
    this.viewApp = false;
  }
  appDetail(id: string) {
    this.applicationService
      .getApp(id)
      .subscribe(
        (requestReponse) => (this.app = requestReponse.applicationDtos[0])
      );
  }
  formatPrice(amount: any) {
    return new Intl.NumberFormat('bas-CM', {
      style: 'currency',
      currency: 'XOF',
    }).format(amount);
  }
  share(app: any) {
    console.log(app);

    this.app = app;
    this.appId = app.id;
    this.name = app.name;
    this.img = app.logoURL;
    this.stat = app.statusApplication;
    this.balance = app.balance;
    this.fees = app.addFees;
    this.percent = app.percent;
    this.key = app.publicKey;

    this.viewApp = true;
  }
}
