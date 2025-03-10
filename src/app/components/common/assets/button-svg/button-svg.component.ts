import {booleanAttribute, Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-button-svg',
  imports: [
    NgIf
  ],
  templateUrl: './button-svg.component.html',
  styleUrl: './button-svg.component.css'
})
export class ButtonSvgComponent {
  @Input({transform: booleanAttribute}) public white: boolean = false;
}
