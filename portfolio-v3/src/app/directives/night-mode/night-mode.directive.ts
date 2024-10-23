import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";


@Directive({
  selector: '[nightMode]'
})

export class NightModeDirective implements OnChanges {


  @Input() changModeState: boolean = false;

  constructor(){}



  ngOnChanges(changes: SimpleChanges): void {
    this.changeMode();
  }

  changeMode() {
    if (this.changModeState) {
      this.changModeState = !this.changModeState
    }
  }
}
