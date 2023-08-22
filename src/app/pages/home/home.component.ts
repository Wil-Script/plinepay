import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  createAppVisible = false;
  activeAccountVisible = true;

  showCreateApp() {
    this.createAppVisible = true;
  }
  hideCreateApp() {
    this.createAppVisible = false;
  }
  hideAccountActivationPop(){
    this.activeAccountVisible = false;
  }
}
