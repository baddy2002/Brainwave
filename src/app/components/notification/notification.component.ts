import {Component, Input} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from '@angular/common';

import {notification1} from '../../../../public/assets';
import {heroIcons, notificationImages} from '../../managements';
import {ParallaxDirective} from '../../directives/parallax.directive';

@Component({
  selector: 'app-notification',
  imports: [
    NgClass,
    NgForOf,
    NgOptimizedImage,
    ParallaxDirective
  ],
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  @Input() className: string ="";
  @Input() title: string = "Notification";
  protected readonly heroIcons = heroIcons;
  protected readonly notificationImages = notificationImages;
  protected readonly notification1 = notification1;
}
