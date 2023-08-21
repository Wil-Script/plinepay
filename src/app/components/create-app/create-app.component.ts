import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-app',
  templateUrl: './create-app.component.html',
  styleUrls: ['./create-app.component.css'],
})
export class CreateAppComponent implements OnInit {
  constructor() {}
  addFees = false;
  name = '';
  whoTakeFees = 4;
  userPercent = 0;

  ngOnInit() {}
  setVar(value: string) {
    this.name = value;
  }
  fees() {
    if (this.whoTakeFees <= 1) {
      this.addFees = true;
    } else {
      this.addFees = false;
    }
  }
  checkNumber() {
    return;
  }
  clientPercentage() {
    if (isNaN(this.userPercent)) {
      this.userPercent = 0;
      return alert('Entrez une valeur comprise entre 20 et 80%');
    }
  }
}
