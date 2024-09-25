import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppModeService } from 'src/app/services/app-mode/app-mode.service';
import { ScrollDirectionService } from 'src/app/services/scroll-direction/scroll-direction.service';
import { ScrollData } from 'src/app/interfaces/scroll-direction.interface';
@Component({
  selector: 'app-header',  // <app-header> should match this selector
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  isActive: boolean = true;

  scrollDataSource!: Subscription;

  scrollData: ScrollData = {direction: '', value: 0};
  constructor(private appModeService : AppModeService, private scrollDirectionService : ScrollDirectionService  ){

  }

  onChangeMode() {
    this.isActive = !this.isActive;
    console.log('====================================');
    console.log("Hello");
    console.log('====================================');
    if (this.isActive ) {
      this.appModeService.setAppModeStatus('day')
    } else {
      this.appModeService.setAppModeStatus('night')
    }
  }

 ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  this.scrollDataSource = this.scrollDirectionService.getScrollData.subscribe(scrollData => {

    if (scrollData) {
      this.scrollData = scrollData;
      console.log(this.scrollData);

    }
  })
 }

 ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  if (this.scrollDataSource) {
    this.scrollDataSource.unsubscribe()
  }
 }
}
