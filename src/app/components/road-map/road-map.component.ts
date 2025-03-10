import { Component } from '@angular/core';

import {roadmap} from '../../managements';
import {check2, grid, loading1} from '../../../../public/assets';
import {SectionComponent} from '../common/section/section.component';
import {HeadingComponent} from '../common/heading/heading.component';
import {NgClass, NgForOf, NgOptimizedImage} from '@angular/common';
import {TagLineComponent} from '../common/tag-line/tag-line.component';
import {
  ServicesGradientImageComponent
} from '../common/assets/services-gradient-image/services-gradient-image.component';
import {ButtonComponent} from '../common/button/button.component';

@Component({
  selector: 'app-road-map',
  imports: [
    SectionComponent,
    HeadingComponent,
    NgForOf,
    TagLineComponent,
    NgOptimizedImage,
    NgClass,
    ButtonComponent,
    ServicesGradientImageComponent,
  ],
  templateUrl: './road-map.component.html',
  styleUrl: './road-map.component.css'
})
export class RoadMapComponent {
  protected readonly roadmap = roadmap;
  protected readonly grid = grid;
  protected readonly check2 = check2;
  protected readonly loading1 = loading1;
}
