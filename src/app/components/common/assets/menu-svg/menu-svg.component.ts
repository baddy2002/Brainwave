import {Component, Input, SimpleChanges} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-menu-svg',
  imports: [
    NgIf
  ],
  templateUrl: './menu-svg.component.html',
  styleUrl: './menu-svg.component.css'
})
export class MenuSvgComponent {
  @Input() openNavigation: boolean = false;

}
