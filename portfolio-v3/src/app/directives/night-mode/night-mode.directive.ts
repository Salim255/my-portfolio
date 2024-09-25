import { AfterViewInit, Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from "@angular/core";


@Directive({
  selector: '[nightMode]'
})

export class NightModeDirective implements OnChanges {


  @Input() changModeState: boolean = false;

  constructor(private element: ElementRef, private renderer: Renderer2){}



  ngOnChanges(changes: SimpleChanges): void {
    this.changeMode();
  }

  changeMode() {
    let el = this.element.nativeElement.parentElement;

    if (this.changModeState) {
      //this.renderer.setStyle(el, 'backgroundColor', 'white')
      this.changModeState = !this.changModeState
    } else {
      //this.renderer.setStyle(el, 'backgroundColor', '#050505')
    }
  }
}
