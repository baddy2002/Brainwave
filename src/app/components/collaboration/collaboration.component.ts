import { Component } from '@angular/core';



import { brainwaveSymbol, check} from '../../../../public/assets';
import {collabApps, collabContent, collabText} from '../../managements';
import {SectionComponent} from '../common/section/section.component';
import {NgForOf, NgIf, NgOptimizedImage, NgStyle} from '@angular/common';
import {ButtonComponent} from '../common/button/button.component';
import {LeftCurveComponent} from '../common/assets/left-curve/left-curve.component';
import {RightCurveComponent} from '../common/assets/right-curve/right-curve.component';

@Component({
  selector: 'app-collaboration',
  imports: [
    SectionComponent,
    NgForOf,
    NgOptimizedImage,
    NgIf,
    ButtonComponent,
    NgStyle,
    LeftCurveComponent,
    RightCurveComponent
  ],
  templateUrl: './collaboration.component.html',
  styleUrl: './collaboration.component.css'
})
export class CollaborationComponent {

  protected readonly check = check;
  protected readonly collabApps = collabApps;
  protected readonly collabText = collabText;
  protected readonly brainwaveSymbol = brainwaveSymbol;
  protected readonly collabContent = collabContent;
}
