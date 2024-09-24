import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppModeService } from 'src/app/services/app-mode/app-mode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
    modeStatus!: Subscription;
    constructor(private appModeService: AppModeService,
       private renderer: Renderer2,
      private element: ElementRef){}

    ngAfterViewInit(): void {
        this.modeStatus = this.appModeService.getAppModeStatus.subscribe( appMode => {
          let el = this.element.nativeElement.querySelector('main');
          console.log('====================================');
          console.log(el);
          console.log('====================================');
          if (appMode === 'day') {
             this.renderer.setStyle(el, 'backgroundColor', '#fff');
             this.renderer.setStyle(document.body, 'color', 'black');
          } else if (appMode === 'night') {
            this.renderer.setStyle(el, 'backgroundColor', '#000000')
            this.renderer.setStyle(document.body, 'color', '#fff');
          }
        }) ;
    }

    ngOnDestroy(): void {
      if (this.modeStatus) {
        this.modeStatus.unsubscribe()
      }
    }
}
