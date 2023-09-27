import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from 'src/app/models/payment';
import { PaymentMethod } from 'src/app/models/paymentMethod';

@Component({
  selector: 'app-paiement-detail',
  templateUrl: './paiement-detail.component.html',
  styleUrls: ['./paiement-detail.component.css'],
})
export class PaiementDetailComponent implements OnInit {
  appId: any;
  routage: string = '';
  paiement?: Payment;
  paiementMethod?: PaymentMethod;
  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute
  ) {
    this.appId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    console.log(this.appId);

    this.getPaymentData(this.appId);
  }
  getPaymentData(id: string) {
    this.paymentService.getSinglePayment(id).subscribe((response) => {
      this.paiement = response.paymentDtos[0];
      this.paiementMethod = response.paymentMethodDtos[0];
      console.log(this.paiement, this.paiementMethod);
    });
  }
  formatPrice(amount: any) {
    return new Intl.NumberFormat('bas-CM', {
      style: 'currency',
      currency: 'XOF',
    }).format(amount);
  }
}
