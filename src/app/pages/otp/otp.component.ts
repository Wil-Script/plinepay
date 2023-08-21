import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent {
  input1 = document.querySelector('#input-1') as HTMLInputElement | null;
  input2 = document.querySelector('#input-2') as HTMLInputElement | null;
  input3 = document.querySelector('#input-3') as HTMLInputElement | null;
  input4 = document.querySelector('#input-4') as HTMLInputElement | null;
  input5 = document.querySelector('#input-5') as HTMLInputElement | null;

  // @ViewChild('input1', {static:false}) input1 : ElementRef

  inputRange = false;
  inputSwitch(inputNumber: number): void {
    switch (inputNumber) {
      case 1:
        this.input2?.focus();
        console.log('envoies vers 2');
        console.log(this.input1);

        break;

      case 2:
        this.input3?.focus();
        console.log('envoies vers 3');
        console.log(this.input2);
        break;

      case 3:
        this.input4?.focus();
        console.log('envoies vers 4');
        console.log(this.input3);
        break;

      case 4:
        this.input5?.focus();
        console.log('envoies vers 5');
        break;

      default:
        break;
    }
  }
}
