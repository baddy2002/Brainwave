import {booleanAttribute, Component, Input} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {SectionSvgComponent} from '../section-svg/section-svg.component';

@Component({
  selector: 'app-section',
  imports: [
    NgClass,
    NgIf,
    SectionSvgComponent
  ],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
  @Input() className: string = '';
  @Input() id: string = '';
  @Input() crosses: string = '';
  @Input() crossOffset: string = '';
  @Input({transform: booleanAttribute}) customPaddings: boolean = false;
}
