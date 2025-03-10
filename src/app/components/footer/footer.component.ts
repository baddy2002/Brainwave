import { Component } from '@angular/core';
import {SectionComponent} from '../common/section/section.component';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {socials} from '../../managements';

@Component({
  selector: 'app-footer',
  imports: [
    SectionComponent,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  protected readonly currentYear: number = new Date().getFullYear();

  protected readonly socials = socials;
}
