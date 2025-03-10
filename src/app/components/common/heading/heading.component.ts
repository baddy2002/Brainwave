import {Component, Input} from '@angular/core';
import {TagLineComponent} from '../tag-line/tag-line.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-heading',
  imports: [
    TagLineComponent,
    NgIf
  ],
  templateUrl: './heading.component.html',
})
export class HeadingComponent {

  @Input() title: string = 'Heading';
  @Input() text: string = 'Heading';
  @Input() tag: string = 'Heading';
  @Input() className: string = 'Heading';

}
