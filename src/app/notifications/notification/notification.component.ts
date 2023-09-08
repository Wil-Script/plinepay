import { Component, Input } from '@angular/core';
import { Notification } from '../model/notification';
import { NotificationsService } from '../services/notifications.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { timer } from 'rxjs';

@Component({
  selector: 'my-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input()
  notification!: Notification;

  constructor(private _notificationsService: NotificationsService) { }

  pause() {
    this.notification.paused.next(true);
  }

  unPause() {
    this.notification.paused.next(false);
  }

  remove() {
    this._notificationsService.removeNotification(this.notification.id);
  }

}
