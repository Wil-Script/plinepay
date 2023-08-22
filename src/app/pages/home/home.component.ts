import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  createAppVisible = false;
  showCreateApp() {
    this.createAppVisible = true;
  }
  hideCreateApp() {
    this.createAppVisible = false;
  }
}
