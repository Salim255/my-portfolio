import { Directive, ElementRef, HostListener, NgZone } from "@angular/core";
import { ScrollDirectionService } from "src/app/services/scroll-direction/scroll-direction.service";

@Directive({
   selector: '[scrollDirection]'
})
export class ScrollDirectionDirective {
   private lastScrollTop = 0;

   constructor(private ngZone: NgZone, private el: ElementRef, private scrollDirectionService : ScrollDirectionService ){}

   @HostListener('scroll', ['$event'])
   onMainScroll(event: Event) {
     const main = this.el.nativeElement; // 'main' element reference
     const currentScroll = main.scrollTop;

     if (currentScroll > this.lastScrollTop) {
       //console.log('Scrolled down');
      this.scrollDirectionService.setScrollDirectionData({direction: 'down', value: currentScroll });
     } else if (currentScroll < this.lastScrollTop) {
       //console.log('Scrolled up');
       this.scrollDirectionService.setScrollDirectionData({direction: 'up', value: currentScroll });
     }

     this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
   }



}
