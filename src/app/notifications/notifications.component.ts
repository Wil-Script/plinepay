import { Component } from '@angular/core';
import { Notification } from './model/notification';
import { NotificationsService } from
  './services/notifications.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'my-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('100ms ease-in-out')
      ]),
      transition('* => void', [
        animate('200ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class NotificationsComponent {

  notifications$;

  constructor(private _notificationsService: NotificationsService) {
    this.notifications$ = this._notificationsService.getNotifications();
  }

  trackById(index:number, item:any) {
    return item.id;
  }
}
