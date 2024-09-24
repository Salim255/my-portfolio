import { AfterViewInit, Directive } from "@angular/core";
@Directive({
  selector: '[starsLights]'
})
export class StarsDirective implements AfterViewInit {
    constructor(){}

    ngAfterViewInit(): void {
      console.log('====================================');
      console.log("Hello from view Init");
      console.log('====================================');
    }
}
