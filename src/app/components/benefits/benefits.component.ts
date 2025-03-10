import { Component } from '@angular/core';
import {SectionComponent} from '../common/section/section.component';
import {HeadingComponent} from '../common/heading/heading.component';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {benefits} from '../../managements';
import {ArrowComponent} from '../common/assets/arrow/arrow.component';
import {ClipPathComponent} from '../common/assets/clip-path/clip-path.component';
import {GradientLightComponent} from '../common/assets/gradient-light/gradient-light.component';

@Component({
  selector: 'app-benefits',
  imports: [
    SectionComponent,
    HeadingComponent,
    NgForOf,
    NgOptimizedImage,
    NgIf,
    ArrowComponent,
    ClipPathComponent,
    GradientLightComponent
  ],
  templateUrl: './benefits.component.html',
})
export class BenefitsComponent {

  protected readonly benefits = benefits;
}
