import { Component } from '@angular/core';

import {check} from '../../../../public/assets';
import {pricing} from '../../managements';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {ButtonComponent} from '../common/button/button.component';

@Component({
  selector: 'app-pricing-list',
  imports: [
    NgForOf,
    NgIf,
    ButtonComponent,
    NgOptimizedImage
  ],
  templateUrl: './pricing-list.component.html',
  styleUrl: './pricing-list.component.css'
})
export class PricingListComponent {

  protected readonly pricing = pricing;
  protected readonly check = check;
}
