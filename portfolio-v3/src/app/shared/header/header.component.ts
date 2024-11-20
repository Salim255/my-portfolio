import { Component} from '@angular/core';
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
  scrollData: ScrollData = {direction: '', value: 0};
  scrollDataSource!: Subscription;

  constructor(private appModeService : AppModeService,
    private scrollDirectionService : ScrollDirectionService,
    ){
  }

  ngAfterViewInit(): void {

    this.scrollDataSource = this.scrollDirectionService.getScrollData.subscribe(scrollData => {
        if (scrollData) {
          this.scrollData = scrollData;
        }
    });
   }

  onChangeMode() {
    this.isActive = !this.isActive;
    if (this.isActive ) {
      this.appModeService.setAppModeStatus('day')
    } else {
      this.appModeService.setAppModeStatus('night')
    }
  }

}
