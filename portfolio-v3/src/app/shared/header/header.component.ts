import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppModeService } from 'src/app/services/app-mode/app-mode.service';
import { ScrollDirectionService } from 'src/app/services/scroll-direction/scroll-direction.service';
import { ScrollData } from 'src/app/interfaces/scroll-direction.interface';
import { AppMenuService } from 'src/app/services/app-menu/app-menu.service';

@Component({
  selector: 'app-header',  // <app-header> should match this selector
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  isActive: boolean = true;
  previousStat: boolean = false ;
  scrollData: ScrollData = {direction: '', value: 0};

  scrollDataSource!: Subscription;
  private previousStatSource!: Subscription;

  constructor(private appModeService : AppModeService,
    private scrollDirectionService : ScrollDirectionService,
    private appMenuService: AppMenuService ){
  }

  ngAfterViewInit(): void {

    this.scrollDataSource = this.scrollDirectionService.getScrollData.subscribe(scrollData => {
        if (scrollData) {
          this.scrollData = scrollData;
        }
    });

    this.previousStatSource = this.appMenuService.getMenuStat.subscribe(stat => {
      if (stat=== 'show') {
        this.previousStat = true
      } else {
        this.previousStat = false
      };

    })

   }

  onChangeMode() {
    this.isActive = !this.isActive;
    if (this.isActive ) {
      this.appModeService.setAppModeStatus('day')
    } else {
      this.appModeService.setAppModeStatus('night')
    }
  }

 onMenu(){

    if (this.previousStat)  {
      this.appMenuService.setMenuStat('hide')
    }
    else {
      this.appMenuService.setMenuStat('show')
    }
  }

 ngOnDestroy(): void {
    if (this.scrollDataSource) {
      this.scrollDataSource.unsubscribe()
    }

    if (this.previousStatSource) {
      this.previousStatSource.unsubscribe();
    }
 }
}
