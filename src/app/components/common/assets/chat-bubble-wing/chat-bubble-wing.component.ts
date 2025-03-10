import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-chat-bubble-wing',
  imports: [],
  templateUrl: './chat-bubble-wing.component.html',
})
export class ChatBubbleWingComponent {
  @Input() className: string="chat-bubble-wing";
  @Input() pathClassName: string="chat-bubble-wing";
}
