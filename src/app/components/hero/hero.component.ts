import { Component } from '@angular/core';
import {SectionComponent} from '../section/section.component';
import {NgForOf, NgOptimizedImage} from '@angular/common';

import {curve, robot, heroBackground, gradient} from '../../../../../public/assets';
import {ButtonComponent} from '../button/button.component';
import {heroIcons} from '../../../managements';
import {ParallaxDirective} from '../../../directives/parallax.directive';
import {GradientComponent} from '../assets/gradient/gradient.component';
import {BackgroundCirclesComponent} from '../assets/background-circles/background-circles.component';
import {BottomLineComponent} from '../assets/bottom-line/bottom-line.component';

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
    BottomLineComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
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
