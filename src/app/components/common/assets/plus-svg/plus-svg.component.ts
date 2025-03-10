import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-plus-svg',
  imports: [],
  templateUrl: './plus-svg.component.html',
  styleUrl: './plus-svg.component.css'
})
export class PlusSvgComponent {
  @Input() className: string = '';
}
