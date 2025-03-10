import { Component } from '@angular/core';
import {SectionComponent} from '../common/section/section.component';
import {NgForOf, NgOptimizedImage} from '@angular/common';

import {curve, robot, heroBackground, gradient} from '../../../../public/assets';
import {ButtonComponent} from '../common/button/button.component';
import {heroIcons} from '../../managements';
import {ParallaxDirective} from '../../directives/parallax.directive';
import {GradientComponent} from '../common/assets/gradient/gradient.component';
import {BackgroundCirclesComponent} from '../common/assets/background-circles/background-circles.component';
import {BottomLineComponent} from '../common/assets/bottom-line/bottom-line.component';
import {GeneratingComponent} from '../generating/generating.component';
import {NotificationComponent} from '../notification/notification.component';
import {CompanyLogosComponent} from '../common/company-logos/company-logos.component';

@Component({
  selector: 'app-hero',
  imports: [
    SectionComponent,
    NgOptimizedImage,
    ButtonComponent,
    NgForOf,
    ParallaxDirective,
    GradientComponent,
    BackgroundCirclesComponent,
    BottomLineComponent,
    GeneratingComponent,
    NotificationComponent,
    CompanyLogosComponent
  ],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  curve: string = curve;
  robot: string = robot;
  heroBackground: string = heroBackground;
  gradient: string = gradient;
  heroIcons: string[] = heroIcons;

  constructor() {
    console.log('Hero Icons:', this.heroIcons); // Debug
  }
}
