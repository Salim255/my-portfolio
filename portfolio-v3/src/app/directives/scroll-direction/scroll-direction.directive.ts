import { Directive, ElementRef, EventEmitter, HostListener, NgZone, Output } from "@angular/core";


@Directive({
   selector: '[scroll-direction]'
})
export class ScrollDirectionDirective {
   private lastScrollTop = 0;

   @Output() scrolledUp = new EventEmitter<void>();
   @Output() scrolledDown = new EventEmitter<void>();

   constructor(private ngZone: NgZone, private el: ElementRef){}


   @HostListener('scroll', ['$event'])
   onMainScroll(event: Event) {
     const main = this.el.nativeElement; // 'main' element reference
     const currentScroll = main.scrollTop;

     console.log(currentScroll);

     if (currentScroll > this.lastScrollTop) {
       //console.log('Scrolled down');
       this.scrolledDown.emit();
     } else if (currentScroll < this.lastScrollTop) {
       //console.log('Scrolled up');
       this.scrolledUp.emit();
     }

     this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
   }



}
