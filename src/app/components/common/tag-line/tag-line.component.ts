import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-line',
  templateUrl: './tag-line.component.html',
})
export class TagLineComponent {
  @Input() className: string = '';
}
