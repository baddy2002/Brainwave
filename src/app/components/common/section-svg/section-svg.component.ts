import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-section-svg',
  imports: [
    NgClass
  ],
  templateUrl: './section-svg.component.html',
  styleUrl: './section-svg.component.css'
})
export class SectionSvgComponent {
  @Input() crossOffset: string = '';
}
