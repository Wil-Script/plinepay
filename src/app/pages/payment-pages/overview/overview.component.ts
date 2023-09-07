import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Application } from 'src/app/models/application';
import { Payement } from 'src/app/models/payement';
import { Applicationservice } from 'src/app/services/application.service';
import {
  Datatable,
  initTE,
} from "tw-elements";
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  constructor(private SpinnerSevice: NgxSpinnerService,
    private applicationService:Applicationservice){}
  application = new Application('','',false,0,'','');
  apps:Application[]=[];
  paiments:any[]=[];
  applicationSelected:any

  ngOnInit(){
      this.SpinnerSevice.show();
      this.applicationService
      .getApplicationList()
      .subscribe(
        (response) =>{
          (this.apps = response.applicationDtos)
          this.applicationSelected = this.apps[0].id
          this.getPayment(this.applicationSelected)
        }  
      );
  }

  getPayment(id:string){
    this.SpinnerSevice.show();
    this.applicationService.getSingleAppPayments(id).subscribe(
      (response) =>{
        (this.paiments = response.payementDtoSearch.items)
        this.SpinnerSevice.hide();
      }  
    );
  }
  //chargement des paiements de l'application sélectionnée
  loadPayments(idApp:any){
    this.getPayment(idApp);
  }

}

