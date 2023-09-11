import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  profileComplete: string = "false";
  profileCertified: boolean = false;
  barVisibility: boolean = false;
  msgType: string = '';
  ngOnInit() {
    let userInfos = JSON.parse(localStorage.getItem('userDto') || '');
    console.log(userInfos);

    this.profileComplete = userInfos.traderAccountIsComplet;
    this.profileCertified = userInfos.enable;
    if (this.profileComplete == "false" || !this.profileCertified) {
      this.barVisibility = true;
      if (this.profileComplete == "false") {
        this.msgType = 'profileUncomplete';
        return;
      } else {
        this.msgType = 'profileApprov';
        return;
      }
    }

    //   {
    //     "id": "608690de-4765-4cca-8790-d04374a071e5",
    //     "dateCreation": 1694183244689,
    //     "lastDateUpdate": 1694183265868,
    //     "userCreation": "SYSTEM_IN",
    //     "lastUserUpdate": "SYSTEM_IN",
    //     "entityState": true,
    //     "flag": true,
    //     "name": "Atouba",
    //     "surname": "Merlin",
    //     "phone": "655478923",
    //     "email": "atouba@gmail.com",
    //     "username": "",
    //     "password": "c9feb0dc0d4604b1d079213702669501a6b11b42",
    //     "enable": true,
    //     "profilImage": null,
    //     "firebaseToken": null,
    //     "userType": "USER",
    //     "roleId": "1739751f-a7f1-4ba9-a45e-d9c31f956d74",
    //     "roleName": "Rôle par défault",
    //     "roleCode": "DEFAULT",
    //     "traderAccountId": "8a66005e-8742-46f2-84e6-f903c2dee632",
    //     "traderAccountName": "Atouba Corp",
    //     "traderAccountIsComplet": "true",
    //     "traderAccountType": null,
    //     "traderAccountPrivacyPolicy": false,
    //     "traderAccountAntiMoneyLaunderingPolicy": false,
    //     "traderAccountCode": "2368-TMnF-POsu44-3#"
    // }
  }
}
