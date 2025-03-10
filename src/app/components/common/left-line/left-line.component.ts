import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {lines} from '../../../../../public/assets';

@Component({
  selector: 'app-left-line',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './left-line.component.html',
})
export class LeftLineComponent {

  protected readonly lines = lines;
}
