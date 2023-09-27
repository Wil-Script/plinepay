import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Applicationservice } from 'src/app/services/application.service';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css'],
})
export class ApplicationDetailComponent implements OnInit {
  appId: any;
  app = {
    id: '',
    dateCreation: 0,
    lastDateUpdate: 0,
    userCreation: 'SYSTEM_IN',
    lastUserUpdate: 'SYSTEM_IN',
    entityState: false,
    flag: false,
    name: '',
    publicKey: '',
    addFees: false,
    percent: 0,
    logoURL: '',
    callBackSuccessURL: null,
    callBackCancelURL: null,
    callBackErrorURL: null,
    balance: 0,
    statusApplication: '',
    traderAccountId: '',
    traderAccountCode: '',
    traderAccountName: '',
    identificationKey: '',
    applicationMode: '',
  };
  routage: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private applicationService: Applicationservice
  ) {
    this.appId = this.route.snapshot.paramMap.get('id');
    this.getGeneralInfos(this.appId);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routage = this.router.url;
        console.log(this.routage);
        console.log(`/application/${this.appId}/statistique`);
        if(`/application/${this.appId}/statistique` == this.routage) console.log(true);
        
      }
    });
    console.log(this.routage);
  }
  getGeneralInfos(id: string) {
    this.applicationService
      .getApp(id)
      .subscribe(
        (requestReponse) => (this.app = requestReponse.applicationDtos[0])
      );
  }
}
