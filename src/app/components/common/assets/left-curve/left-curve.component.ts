import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {curve1} from '../../../../../../public/assets';

@Component({
  selector: 'app-left-curve',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './left-curve.component.html',
})
export class LeftCurveComponent {

  protected readonly curve1 = curve1;
}
