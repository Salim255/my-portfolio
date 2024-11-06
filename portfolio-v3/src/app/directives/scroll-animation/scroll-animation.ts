import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
     selector: '[scrollAnimation]'
})
export class ScrollAnimationDirective {
  constructor(private el: ElementRef, private renderer: Renderer2){}

  @HostListener('scroll', ['$event'])
  scrolling(event: any){

    const sections = this.el.nativeElement.querySelectorAll('div[id]');
    const featured = this.el.nativeElement.querySelectorAll('.featured-item');
    //console.log( featured);

   featured.forEach((feature: HTMLElement) => {
        const rect = feature.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            this.renderer.addClass(feature, 'animate-featured__show')
        } else {
              this.renderer.removeClass(feature, 'animate-featured__show')
        }
   })
   /*  const = this featured-item */
    //console.log(sections);
     sections.forEach((section: HTMLElement) => {
         //console.log(section);
         const rect = section.getBoundingClientRect();

         /* if (section.classList.contains()) */
         const threshold = 110;
        if (section.id === "work") {
          //console.log(section);

        }
        if (section.id !== "media-section") {
          if (rect.top < window.innerHeight - threshold && rect.bottom > threshold) {
            this.renderer.addClass(section, 'animate__show');
           } else {
            this.renderer.removeClass(section, 'animate__show');
           }

        }

     })




  }
}
