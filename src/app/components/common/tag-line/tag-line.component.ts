import { Component, Input } from '@angular/core';
import {BracketsComponent} from '../assets/brackets/brackets.component';

@Component({
  selector: 'app-tag-line',
  templateUrl: './tag-line.component.html',
  imports: [
    BracketsComponent
  ]
})
export class TagLineComponent {
  @Input() className: string = '';
}
