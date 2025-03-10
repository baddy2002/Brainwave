import {Component, Input} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {gradient} from '../../../../../../public/assets';

@Component({
  selector: 'app-services-gradient-image',
  imports: [
    NgOptimizedImage,
    NgIf,
  ],
  templateUrl: './services-gradient-image.component.html',
})
export class ServicesGradientImageComponent {
  @Input() type: string = 'services';
  @Input() divClass: string = 'services-gradient-image';
  @Input() imageClass: string = 'services-gradient-image';
  protected readonly gradient = gradient;

}
