import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-application-item',
  templateUrl: './application-item.component.html',
  styleUrls: ['./application-item.component.css']
})
export class ApplicationItemComponent {

  @Input() app = {};
  @Input() name = '';
  @Input() balance= 0 ;
  @Input() logoUrl= '';
}
