import {Component, Input} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {loading} from '../../../../public/assets';

@Component({
  selector: 'app-generating',
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './generating.component.html'
})
export class GeneratingComponent {
  @Input() className: string = '';
  protected readonly loading = loading;
}
