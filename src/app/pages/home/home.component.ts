import { Component, OnInit } from '@angular/core';
import { Applicationservice } from 'src/app/services/application.service';
import { Application } from 'src/app/models/application';
import { Response } from 'src/app/models/response.model';
import { User } from 'src/app/models/user.model';

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
  appId = ''

  constructor(private applicationService: Applicationservice) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userDto') || '');
    this.applicationService
      .getApplicationList()
      .subscribe(
        (requestReponse) =>
          (this.applicationList = requestReponse.applicationDtos)
      );

    setTimeout(() => {
      console.log(this.applicationList);
    }, 1000);
  }
  createAppVisible = false;
  activeAccountVisible = true;
  viewApp = false;

  showCreateApp() {
    this.createAppVisible = true;
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
  //   {
  //     "id": "c72de549-37fc-491d-ab4a-59830ae9b996",
  //     "dateCreation": 1693927671405,
  //     "lastDateUpdate": 1693989722659,
  //     "userCreation": "SYSTEM_IN",
  //     "lastUserUpdate": "SYSTEM_IN",
  //     "entityState": true,
  //     "flag": true,
  //     "name": "Maisonier Lite",
  //     "privateKey": "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCu8EuFGGTqkfLh2lQg/Ygg9nIIRDfLqYkRYgZdXs/9UQa5In3N9nM+pT8RzPpEoDsh4pjtXweADPR/+Wfd9kSLg2N0s4+EGTUg/9NH6qpuaKnS0QOGQ63dIb5NlvLtRFvPilnPaYODSgfMU6VpMOmiGTzQya4Exkg9bINAylraGnYAWYw43yjJjulmbc7IwEIhgMvrgBoXGueOCle25nuLcMmmd+Y9oWHTCGMOCZFpb2EdxyEAkMD9B6Z/FJz5J2KI39Fz6Ce+o+8EzB1LIXQUS3CXLRIMto0kSfJ4AjvQvPTg5A80h2tJ7XBv6p884rFzU0Vvrj3LwbyfDvwAeiPPAgMBAAECggEACmesdjwfNHx9z8Umn9e0kxFVcvxrvSdWSbxk2ITdJhn9pmFQzkFMVXuKpspkUFSfb8KEignO7mTW3g29icwuA4ZLEhPkA11kdZQBwxNIE80R3MIlzYSVAMQTB5Zk2IvqUgvOj7Gc6uAqWpLXEcyg+M07esekHBCXF2Au5lmi0boL3GYUxwQlDrisdD0nJzVkgKPpIGGcMQYMexhrp75dCqGv+rF6OdTKKs04DaQ9fe0z0WTPE1Ng1qE4sz9z7T9ZU5OihylZiBI8s7jTtc0yUgS4aEWI/6+BN1oor2BHNW3m4xgRluQ7RQVnxpE/KD6JQ6LcfeRABP+HT7w9418sQQKBgQC97fUJuI0jYfvM6Ppc9yu9UvYsn3tvHlb9wx/W+MLGaLS5qhHe6J1qqK3maUr2/RojRBcZt9Q1C/jr3MjLB67I6Z8Ainnys+Ib1Wpm8jo1ci4JUu+WojgYzUDaS0gH457MYN8zLplS3cS7gc4qhFjdXyJ7lln3evp1F0dTYJYxsQKBgQDry1YdjYav+HiAYxNWNihv64rmeBpvKofrSy9pe6zqh5Am0NODgLAqJ+XsfyjKWtFiMenKl4Qv3XuHxVs9/3ETUntkGitOCVPVrvPxBOlWlyT+YnRNfrBO2WALmICAhaxB6pynjTtReitICxJ90UCRV5CIpnLA6fYmnCsda2mNfwKBgF2jjxbe1T7nlRRenOjut7LczyAK9PlA1RTBedYrySO3Bbsv3SWwO8QVK7+Yk+wXtyZB8L2uQ0JwB6aJsLlgrUzC2bCTlTISe9zLKG1e6VHmXEoeiJ8UlWGs+FdnnDi/gVA0Rnbed5tCWTc09SdDHujteXvDEdIQ4KCP/Itf6EzRAoGBAMWvfy5dtjsYJOb2qYKQ+0wB/T0GGpty2+tP6JsWHj2ulBOG5p4MqSVet+yUG32zsHIUCL9aUm/Sz7tfogSTgZjCgULGkeHl/gxblpdOF9cJ9vDzWDCUc3pX0qdGHw4hg+7rpJTw2neP5nOLHOCxK+HuuPVoHzNPs5hhO+B5alA/AoGBAKDFfnJqTqch+onslObaMPqFwhq/nMBYw6i1jlUKyQuvT3KZoIX4AWBlkOlBjwo+OvRnn5Sxsd57lAMOfRVtZQBs4g1AjZ9P5mxWLvbsYmpF2YNLmYB6rl/fPNO9nxmq+4ZS4TjGz5Te71DhabZwUF9w3KV5awlHVl0Vgu7kqD96",
  //     "publicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArvBLhRhk6pHy4dpUIP2IIPZyCEQ3y6mJEWIGXV7P/VEGuSJ9zfZzPqU/Ecz6RKA7IeKY7V8HgAz0f/ln3fZEi4NjdLOPhBk1IP/TR+qqbmip0tEDhkOt3SG+TZby7URbz4pZz2mDg0oHzFOlaTDpohk80MmuBMZIPWyDQMpa2hp2AFmMON8oyY7pZm3OyMBCIYDL64AaFxrnjgpXtuZ7i3DJpnfmPaFh0whjDgmRaW9hHcchAJDA/QemfxSc+SdiiN/Rc+gnvqPvBMwdSyF0FEtwly0SDLaNJEnyeAI70Lz04OQPNIdrSe1wb+qfPOKxc1NFb649y8G8nw78AHojzwIDAQAB",
  //     "addFees": true,
  //     "percent": 50,
  //     "logoURL": "http://192.168.9.44:8086/api/applications/download/b4471ac1-ee96-423d-9a55-7418b3027954.png",
  //     "callBackSuccessURL": null,
  //     "callBackCancelURL": null,
  //     "callBackErrorURL": null,
  //     "balance": 2105000,
  //     "statusApplication": "ACTIVATED",
  //     "traderAccountId": "735741e1-546f-4691-b994-a96b895460a2",
  //     "traderAccountCode": "7144-wOpW-yKxt17*ca",
  //     "traderAccountName": "PEDROS"
  // }
  }
}
