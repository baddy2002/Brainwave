import { Component, Input, OnInit } from '@angular/core';
import {NgClass} from '@angular/common';
import {RingsComponent} from '../rings/rings.component';
import {ParallaxDirective} from '../../../../directives/parallax.directive';

@Component({
  selector: 'app-background-circles',
  templateUrl: './background-circles.component.html',
  imports: [
    NgClass,
    RingsComponent,
    ParallaxDirective
  ],
  styleUrls: ['./background-circles.component.css']
})
export class BackgroundCirclesComponent implements OnInit {
  @Input() parallaxRef: any;
  mounted = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.mounted = true;
    }, 0);
  }
}
