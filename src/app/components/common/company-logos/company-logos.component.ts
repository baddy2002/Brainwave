import { Component } from '@angular/core';
import {companyLogos} from '../../../../managements';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-company-logos',
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './company-logos.component.html',
})
export class CompanyLogosComponent {

  protected readonly companyLogos = companyLogos;
}
