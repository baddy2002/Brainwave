import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {curve2} from '../../../../../../public/assets';

@Component({
  selector: 'app-right-curve',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './right-curve.component.html',
})
export class RightCurveComponent {

  protected readonly curve2 = curve2;
}
