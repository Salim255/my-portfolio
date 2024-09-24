import { AfterViewInit, Directive, ElementRef, Renderer2 } from "@angular/core";
@Directive({
  selector: '[starsLights]'
})
export class StarsDirective implements AfterViewInit {
    constructor(private element: ElementRef, private renderer: Renderer2){}

    ngAfterViewInit(): void {
      const el = this.element.nativeElement ;

      let j = 0;

      while( j< 40) {
        let star = this.renderer.createElement('i');

        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        // We get a number greater than zero and less than one
        // Math.floor, to get integer number by rounding
        // window.innerWidth this return the interior width of the window in pixels


        // Position the star
        this.renderer.setStyle(star, 'left', `${x}px`);
        this.renderer.setStyle(star, 'top', `${y}px`);

        // Give size to star
        let size = Math.random() * 4;

        this.renderer.setStyle(star, 'width', `${1 + size}px`);
        this.renderer.setStyle(star, 'height', `${1 + size}px` )
        // We add one cause the size value can be zero


        let duration = Math.random() * 2 ;

        this.renderer.setStyle(star, 'animationDuration', `${duration + 1}s`)
        this.renderer.appendChild(el, star);
        j++;
      }
    }
}
