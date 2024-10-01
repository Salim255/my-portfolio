import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from "@angular/core";


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
    if (this.changModeState) {
      this.changModeState = !this.changModeState
    }
  }
}
