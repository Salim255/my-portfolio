import { Component } from "@angular/core";
import { Subscription, timeout } from "rxjs";
import { AppMenuService } from "src/app/services/app-menu/app-menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  isActive: boolean = false;
  isShowingMenu: boolean = false;
  timeoutId: any = null;

  private menuStatSource!: Subscription;
  constructor(private appMenuService: AppMenuService){}

  ngAfterViewInit(): void {
    this.menuStatSource = this.appMenuService.getMenuStat.subscribe(stat => {
      if (stat === 'show') {
        this.isActive = true;
        this.isShowingMenu = true;
      } else {
        this.isActive = false;
      }

    })

  }

  toggleMenu() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

   if (this.isActive) {
    this.isShowingMenu = false;
    this.timeoutId = setTimeout(() => {
      this.appMenuService.setMenuStat('hide');

    }, 500)
   }
  }

  ngOnDestroy(): void {
    if (this.menuStatSource) {
      this.menuStatSource.unsubscribe();
    }

  }
}
