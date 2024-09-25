import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from "@angular/core";
import { ScrollData } from "src/app/interfaces/scroll-direction.interface";

@Directive({
  selector: '[appHeader]'
})

export class AppHeaderDirective implements OnChanges {
  @Input() scrollDirectionData: ScrollData = { direction: '', value: 0 };
  constructor(private renderer: Renderer2, private el: ElementRef){
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

      this.responseToScroll();
  }

  responseToScroll(){

  }
}
