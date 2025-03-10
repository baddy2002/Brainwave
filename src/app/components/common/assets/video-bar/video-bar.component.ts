import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

import {play} from '../../../../../../public/assets';

@Component({
  selector: 'app-video-bar',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './video-bar.component.html',
})
export class VideoBarComponent {

  protected readonly play = play;
}
