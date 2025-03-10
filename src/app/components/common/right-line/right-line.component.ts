import { Component } from '@angular/core';
import {lines} from '../../../../../public/assets';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-right-line',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './right-line.component.html',
})
export class RightLineComponent {

  protected readonly lines = lines;
}
