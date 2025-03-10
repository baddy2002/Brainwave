import {booleanAttribute, Directive, ElementRef, HostListener, Input, numberAttribute, Renderer2} from '@angular/core';
import { ParallaxEffectType } from '../types';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  @Input({ transform: (value: string): ParallaxEffectType =>
      (ParallaxEffectType as any)[value] || 'HOVER'
  })
  parallaxType: ParallaxEffectType = 'HOVER';

  @Input({transform: booleanAttribute}) isParallaxContainer: boolean = false; // Se true, effetto sui figli
  @Input({transform: booleanAttribute}) isParallaxChild: boolean = false; // Se true, è un figlio non dobbiamo applicare nulla
  @Input() intensity: number = 10; // Intensità dello spostamento
  @Input({transform: numberAttribute}) parallaxTransitionDuration: number = 0.3; // Durata della transizione in secondi

  private initialTransform: string = ''; // Stato iniziale per gli effetti di ritorno
  private childrenInitialTransform: string[] = [];
  private descendants: HTMLElement[] = [];
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private valorizeDescendants() {
    this.descendants = []; // Pulisce la lista di discendenti
    this.traverseChildren(this.el.nativeElement); // Inizia il traversing ricorsivo
  }

  private traverseChildren(element: HTMLElement) {
    const children = element.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      this.descendants.push(child); // Aggiungi l'elemento DOM (non ElementRef)
      this.traverseChildren(child); // Ricorsivamente esplora i figli
    }
  }

  ngOnInit() {
    if(this.isParallaxChild) return;
    // Memorizza la trasformazione iniziale (elemento e figli e applica transizione)
    if (this.isParallaxContainer) {
      this.valorizeDescendants();
      for (let i = 0; i < this.descendants.length; i++) {
        const child = this.descendants[i];
        this.childrenInitialTransform[i] = child.style.transform || 'translate(0, 0)';
        this.renderer.setStyle(child, 'transition', `transform ${this.parallaxTransitionDuration}s ease`);
      }
    }else{
      this.initialTransform = this.el.nativeElement.style.transform || 'translate(0, 0)';
      // Applica la transizione(tempo) a tutti gli effetti

      this.renderer.setStyle(this.el.nativeElement, 'transition', `transform ${this.parallaxTransitionDuration}s ease`);
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isParallaxChild) return;
    if (this.parallaxType.includes("FOLLOW")) {
      if (this.isParallaxContainer) {
        this.applyFollowEffectToChildren(event);
      } else {
        this.applyFollowEffectToElement(event);
      }
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.isParallaxChild) return;
    if (this.parallaxType.includes("HOVER") || this.parallaxType.includes("FOLLOW")) {
      this.applyReturnEffect()
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.isParallaxChild) return;
    if (this.parallaxType.includes("HOVER")) {
      if(this.isParallaxContainer){
        this.applyHoverEffectToChildren();
      } else {
        this.applyHoverEffectToElement();
      }
    }
  }

  private applyHoverEffectToElement() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `translateY(-${this.intensity}px)`);

    if (this.parallaxType === "HOVER_WITH_RETURN") {
      setTimeout(() => this.applyReturnEffect(), this.parallaxTransitionDuration * 1000);
    }
  }

  private applyHoverEffectToChildren() {

    for (let i = 0; i < this.descendants.length; i++) {
      const child = this.descendants[i];
      if(child.hasAttribute('isParallaxChild'))
        this.renderer.setStyle(child, 'transform', `translateY(-${this.intensity}px)`);

    }
    if (this.parallaxType === "HOVER_WITH_RETURN") {
      setTimeout(() => this.applyReturnEffect(), this.parallaxTransitionDuration * 1000);
    }
  }

  private applyFollowEffectToElement(event: MouseEvent) {
    // Limitiamo l'intensità del movimento per evitare spostamenti troppo ampi
    const maxMovement = 5;
    const x = Math.min(Math.max(event.movementX, -maxMovement), maxMovement) * this.intensity;
    const y = Math.min(Math.max(event.movementY, -maxMovement), maxMovement) * this.intensity;
    this.renderer.setStyle(this.el.nativeElement, 'transform', `translate(${x}px, ${y}px)`);
  }

  private applyFollowEffectToChildren(event: MouseEvent) {

    for (let i = 0; i < this.descendants.length; i++) {
      const child = this.descendants[i];
      // Applica l'effetto solo agli elementi con appParallax
      if (child.hasAttribute('isParallaxChild')) {

        // Limitare l'intensità del movimento per evitare spostamenti troppo ampi
        const maxMovement = 20;
        const xMove = Math.min(Math.max(event.movementX * this.intensity, -maxMovement), maxMovement);
        const yMove = Math.min(Math.max(event.movementY * this.intensity, -maxMovement), maxMovement);

        // Ottieni la trasformazione CSS dell'elemento
        let angle = 0; // Default: nessuna rotazione
        const parent = child.parentElement;
        if (parent){
          const computedStyle = window.getComputedStyle(parent);
          const transform = computedStyle.transform; // Esempio: "matrix(0.64, 0.77, -0.77, 0.64, 0, 0)"


          if (transform && transform !== "none") {
            const values = transform.match(/matrix\(([^)]+)\)/);
            if (values) {
              const matrix = values[1].split(',').map(parseFloat);
              const a = matrix[0], b = matrix[1]; // Prendi i valori di rotazione
              angle = Math.atan2(b, a); // Calcola l'angolo in radianti
            }
          }
        }

        // 🔄 Converti il movimento nel sistema ruotato
        const xTrans = xMove * Math.cos(-angle) - yMove * Math.sin(-angle);
        const yTrans = xMove * Math.sin(-angle) + yMove * Math.cos(-angle);

        this.renderer.setStyle(child, 'transform', `translate(${xTrans}px, ${yTrans}px)`);
      }
    }
  }

  private applyReturnEffect() {
    if(this.isParallaxChild) return;

    if(this.isParallaxContainer) {
      for(let i = 0; i < this.descendants.length; i++) {
        const child = this.descendants[i];
        if(child.hasAttribute("isParallaxChild"))
          this.renderer.setStyle(child, 'transform', this.childrenInitialTransform[i]);
      }
    } else{
      this.renderer.setStyle(this.el.nativeElement, 'transform', this.initialTransform);

    }
  }

}
