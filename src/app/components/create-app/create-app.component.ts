import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Applicationservice } from 'src/app/services/application.service';

// class ImageSnippet {
//   constructor(public src: string, public file: File) {}
// }

@Component({
  selector: 'app-create-app',
  templateUrl: './create-app.component.html',
  styleUrls: ['./create-app.component.css'],
})
export class CreateAppComponent implements OnInit {
  img: any;
  constructor(private applicationService: Applicationservice) {}
  @Output() close = new EventEmitter<string>();
  addFees = false;
  name = '';
  whoTakeFees = 4;
  userPercent = 0;
  statusApplication='';
  image = null;

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
  getImage(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (e: any) => {
      this.img = e.target.result;
      console.log(this.img);
    });
    reader.readAsDataURL(file);

    // this.img = imageInput.target.files[0];

    // reader.addEventListener('load', (event: any) => {
    //   this.selectedFile = new ImageSnippet(event.target.result, file);
    //   this.imageService.uploadImage(this.selectedFile.file).subscribe(
    //     (res) => {
    //     },
    //     (err) => {
    //     })
    // });
  }
  createApp() {
    if (this.name == '' || this.img == null) {
      return alert('Informations incomplètes');
    }
    const app = {
      name: this.name,
      addFees: this.addFees,
      percent: this.userPercent,
      statusApplication: this.statusApplication,
      logoURL: this.img || '',
      balance: 0,
    };
    this.applicationService.createApp(app).subscribe(async (res: any) => {
      if (res.message.code == 200 || res.message.code == 201) {
        this.closeModal();
        setTimeout(() => {
          location.reload();
        }, 1500);
      }
    });
  }

  closeModal() {
    this.name = '';
    this.whoTakeFees = 4;
    this.userPercent = 0;
    this.img = '';
    this.close.emit();
  }
}
