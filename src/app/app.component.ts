import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/common/header/header.component';
import {ButtonGradientComponent} from './components/common/assets/ButtonGradient/ButtonGradient.component';
import {HeroComponent} from './components/hero/hero.component';
import {BenefitsComponent} from './components/benefits/benefits.component';
import {CollaborationComponent} from './components/collaboration/collaboration.component';
import {ServicesComponent} from './components/services/services.component';
import {PricingComponent} from './components/pricing/pricing.component';
import {RoadMapComponent} from './components/road-map/road-map.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ButtonGradientComponent, HeroComponent, BenefitsComponent, CollaborationComponent, ServicesComponent, PricingComponent, RoadMapComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebDesign';
}
