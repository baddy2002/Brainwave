import {Component, Input} from '@angular/core';
import {RingsComponent} from '../rings/rings.component';
import {BackgrounCirclesComponent} from '../backgroun-circles/backgroun-circles.component';
import {SideLinesComponent} from '../side-lines/side-lines.component';
import {background} from '../../../../../../public/assets';
import {NgOptimizedImage} from '@angular/common';
@Component({
  selector: 'app-hamburger-menu',
  imports: [
    RingsComponent,
    BackgrounCirclesComponent,
    SideLinesComponent,
    NgOptimizedImage
  ],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.css'
})
export class HamburgerMenuComponent {
  background : string = background;
}
