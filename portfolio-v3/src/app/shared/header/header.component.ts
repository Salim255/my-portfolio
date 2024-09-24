import { Component } from '@angular/core';
import { AppModeService } from 'src/app/services/app-mode/app-mode.service';
@Component({
  selector: 'app-header',  // <app-header> should match this selector
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  isActive: boolean = true;
  constructor(private appModeService : AppModeService ){}

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
}
