import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {brainwaveWhiteSymbol} from '../../../../../../public/assets';
import {ChatBubbleWingComponent} from '../chat-bubble-wing/chat-bubble-wing.component';

@Component({
  selector: 'app-video-chat-message',
  imports: [
    NgOptimizedImage,
    ChatBubbleWingComponent
  ],
  templateUrl: './video-chat-message.component.html',
})
export class VideoChatMessageComponent {

  protected readonly brainwaveWhiteSymbol = brainwaveWhiteSymbol;
}
