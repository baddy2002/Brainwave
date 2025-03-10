import {Component} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from '@angular/common';
import {NavigationEnd, Router, RouterLink} from '@angular/router';

import {MenuSvgComponent} from '../assets/menu-svg/menu-svg.component';
import {navigation} from '../../../managements';
import {ButtonComponent} from '../button/button.component';
import {HamburgerMenuComponent} from '../assets/hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgClass,
    ButtonComponent,
    HamburgerMenuComponent,
    MenuSvgComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  navigation = navigation;
  currentUrl: string = '';
  constructor(private router: Router) {}
  openNavigation: boolean = false;

  setOpenNavigation(): void {

    this.openNavigation = !this.openNavigation;
    console.log("Header - openNavigation:", this.openNavigation);

  }

  ngOnInit() {
    this.currentUrl = this.router.url;

    // Sottoscrive agli eventi di navigazione (hash oltre che path)
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Quando la navigazione è terminata, aggiorna currentUrl
        this.currentUrl = event.urlAfterRedirects.substring(1);
      }
    });
  }

  isActive(url: string): boolean {
    const cleanCurrentUrl = this.currentUrl.replace('#', '');
    return cleanCurrentUrl === url;
  }
}
