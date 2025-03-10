import { Component } from '@angular/core';

import {service1, service2, service3, check, gradient} from '../../../../public/assets';
import {brainwaveServices, brainwaveServicesIcons} from '../../managements';
import {SectionComponent} from '../common/section/section.component';
import {HeadingComponent} from '../common/heading/heading.component';
import {NgClass, NgForOf, NgOptimizedImage} from '@angular/common';
import {GeneratingComponent} from '../generating/generating.component';
import {VideoChatMessageComponent} from '../common/assets/video-chat-message/video-chat-message.component';
import {VideoBarComponent} from '../common/assets/video-bar/video-bar.component';
import {PhotoChatMessageComponent} from '../common/assets/photo-chat-message/photo-chat-message.component';
import {
  ServicesGradientImageComponent
} from '../common/assets/services-gradient-image/services-gradient-image.component';


@Component({
  selector: 'app-services',
  imports: [
    SectionComponent,
    HeadingComponent,
    NgOptimizedImage,
    NgForOf,
    GeneratingComponent,
    NgClass,
    VideoChatMessageComponent,
    VideoBarComponent,
    PhotoChatMessageComponent,
    ServicesGradientImageComponent
  ],
  templateUrl: './services.component.html',
})
export class ServicesComponent {

  protected readonly service1 = service1;
  protected readonly brainwaveServices = brainwaveServices;
  protected readonly check = check;
  protected readonly service2 = service2;
  protected readonly brainwaveServicesIcons = brainwaveServicesIcons;
  protected readonly service3 = service3;
  protected readonly gradient = gradient;
}
