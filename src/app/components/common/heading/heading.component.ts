import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-heading',
  imports: [],
  templateUrl: './heading.component.html',
})
export class HeadingComponent {

  @Input() title: string = 'Heading';
  @Input() text: string = 'Heading';
  @Input() tag: string = 'Heading';
  @Input() className: string = 'Heading';

}
