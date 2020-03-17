import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import {PushNotificationService} from './_services/push-notification.service';

const VAPID_PUBLIC =
'BPbd_fVPdcaAQBeSwiQ30vK0lczg_mfHhSNjMHRWsDuDc0ZMwhRiWI4hXe8CLdV2N0_3XONL73uo-ZB5stzsHu0';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'claseam-frontend';
  constructor(swPush: SwPush , pushService: PushNotificationService) {
    if (swPush.isEnabled) {
      swPush
        .requestSubscription({
          serverPublicKey: VAPID_PUBLIC,
        })
        .then(subscription => {
          pushService.sendSubscriptionToTheServer(subscription).subscribe();
        })
        .catch(console.error);
    }
  }
}
