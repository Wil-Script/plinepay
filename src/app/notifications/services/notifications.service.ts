import { Injectable } from '@angular/core';
import { Notification } from '../model/notification';
import { BehaviorSubject, Observable } from 'rxjs';
import { timer } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { getPausableTimer } from '../utils';

@Injectable()
export class NotificationsService {
  private notifications$ = new BehaviorSubject<Notification[]>([]);

  public getNotifications(): Observable<Notification[]> {
    return this.notifications$;
  }

  public addNotification(notification: Notification) {
    if (notification && notification.options && notification.options.timeout) {
      notification.obs = getPausableTimer(notification.options.timeout, notification.paused);
      notification.obs.completeTimer
        .pipe(tap(() => this.removeNotification(notification.id))).subscribe();
    }
    this.next([...this.notifications$.getValue(), notification]);
  }

  public removeNotification(id: number) {
    this.next(this.notifications$.getValue().filter(_ => _.id != id));
  }

  private next(notifications: Notification[]) {
    this.notifications$.next(notifications);
  }
}