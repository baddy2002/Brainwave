import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonSvgComponent} from '../assets/button-svg/button-svg.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    ButtonSvgComponent, CommonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() class: string = "";
  @Input() href: string = "";
  @Input() children: string = "";
  @Input() px: string = "";
  @Input({transform: booleanAttribute}) white: boolean = false;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    this.onClick.emit();  // Emette l'evento quando il bottone viene cliccato
  }
  get classes(): string {
    return `button relative inline-flex items-center
                            justify-center h-11 transition-colors hover:text-color-1
                            ${this.px || "px-7"} ${this.white ? "text-n-8" : "text-n-1"} ${this.class || ""}`;
  }

  get spanClasses(): string {
    return "relative z-10";
  }



}
