import { Component } from '@angular/core';

import {smallSphere, stars} from '../../../../public/assets';
import {SectionComponent} from '../common/section/section.component';
import {NgOptimizedImage} from '@angular/common';
import {HeadingComponent} from '../common/heading/heading.component';
import {PricingListComponent} from '../pricing-list/pricing-list.component';
import {LeftLineComponent} from '../common/left-line/left-line.component';
import {RightLineComponent} from '../common/right-line/right-line.component';

@Component({
  selector: 'app-pricing',
  imports: [
    SectionComponent,
    NgOptimizedImage,
    HeadingComponent,
    PricingListComponent,
    LeftLineComponent,
    RightLineComponent
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

  protected readonly smallSphere = smallSphere;
  protected readonly stars = stars;
}
