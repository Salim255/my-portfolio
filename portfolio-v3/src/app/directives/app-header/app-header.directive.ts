import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from "@angular/core";
import { ScrollData } from "src/app/interfaces/scroll-direction.interface";

@Directive({
  selector: '[appHeader]'
})

export class AppHeaderDirective implements OnChanges {

  @Input() scrollDirectionData: ScrollData = { direction: '', value: 0 };
  constructor(private renderer: Renderer2, private el: ElementRef){
  }

  ngOnChanges(changes: SimpleChanges): void {

      if (changes['scrollDirectionData']) {
        this.responseToScroll();
      }
  }

  @HostListener('click', ["$event"])
   onClickMenu(event: Event){
    const element = this.el.nativeElement ;
    this.renderer.setStyle(element, 'box-shadow', 'none');
  }

  responseToScroll(){
     if (this.scrollDirectionData.direction === 'up') {
      if (this.scrollDirectionData.value === 0) {
        this.showHeader();
      } else if (this.scrollDirectionData.value > 0) {
        this.showHeaderWithBlur();
     }

     } else if (this.scrollDirectionData.direction === 'down' ) {
       if (this.scrollDirectionData.value >12) {
         this.hideHeader();
       }

     }
  }

  hideHeader() {
    const element = this.el.nativeElement ;
    this.renderer.setStyle(element,'transform', 'translateY(-100%)');

  }

  showHeaderWithBlur(){
    const element = this.el.nativeElement ;
    this.renderer.setStyle(element, 'top', '0%');
    this.renderer.setStyle(element,'transform', 'translateY(0)');
    this.renderer.setStyle(element,'backdrop-filter', 'blur(10px)');
    this.renderer.setStyle(element,'-webkit-backdrop-filter', 'blur(10px)');
    this.renderer.setStyle(element, 'box-shadow', '0 2px 5px rgba(0, 0, 0, 0.1)');
  }

  showHeader(){
    const element = this.el.nativeElement ;
    this.renderer.setStyle(element,'backdrop-filter', 'unset');
    this.renderer.setStyle(element,'-webkit-backdrop-filter', 'unset');
    this.renderer.setStyle(element, 'box-shadow', 'unset');
  }
}
