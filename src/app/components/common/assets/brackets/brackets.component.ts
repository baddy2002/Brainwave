import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
})
export class BracketsComponent {
  @Input() position: 'left' | 'right' = 'left';
}
