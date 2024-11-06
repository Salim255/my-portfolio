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
    const moreWebCreations = this.el.nativeElement.querySelectorAll('.work-card');

    //  moreWebCreation animation
    this.moreCreationAnimation(moreWebCreations);

    // Featured animation
    this.featuredAnimation(featured);

    // Home animation
    this.homeAnimation( sections)
  }


  featuredAnimation(features: any) {
    features.forEach((feature: HTMLElement) => {
      const rect = feature.getBoundingClientRect();
      const threshold = 60;
      if (rect.top < window.innerHeight - threshold && rect.bottom > threshold) {
          this.renderer.addClass(feature, 'animate-featured__show')
      } else {
            this.renderer.removeClass(feature, 'animate-featured__show')
      }
  })
  }

  moreCreationAnimation(moreWebCreations: any) {
    moreWebCreations.forEach(( moreCreation: HTMLElement) => {
      const rect =  moreCreation.getBoundingClientRect();
      const threshold = 60;
      if (rect.top < window.innerHeight - threshold && rect.bottom > threshold) {
          this.renderer.addClass( moreCreation, 'animate-more-creation__show')
      } else {
            this.renderer.removeClass( moreCreation, 'animate-more-creation__show')
      }
    })
  }

  homeAnimation(sections: any){
   sections.forEach((section: HTMLElement) => {
      const rect = section.getBoundingClientRect();
      const threshold = 110;

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
