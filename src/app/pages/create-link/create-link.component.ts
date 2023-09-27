import { Component } from '@angular/core';

@Component({
  selector: 'app-create-link',
  templateUrl: './create-link.component.html',
  styleUrls: ['./create-link.component.css'],
})
export class CreateLinkComponent {
  img: any;
  image: any = null;
  product = {
    name: '',
    desc: '',
    price: 0,
    img: '',
    currency: '',
    app: '',
  };
  mobileView = false;
  getImage(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (e: any) => {
      this.img = e.target.result;
      console.log(this.img);
    });
    reader.readAsDataURL(file);
  }
}
