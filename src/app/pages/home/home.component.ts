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
  user!:User;

  constructor(private applicationService: Applicationservice) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("userDto")||'');    
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

  showCreateApp() {
    this.createAppVisible = true;
  }
  hideCreateApp() {
    this.createAppVisible = false;
  }
  hideAccountActivationPop() {
    this.activeAccountVisible = false;
  }
}
