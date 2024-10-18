import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { AppMenuService } from "src/app/services/app-menu/app-menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  isActive: boolean = false;


  private menuStatSource!: Subscription;
  constructor(private appMenuService: AppMenuService){}

  ngAfterViewInit(): void {
    this.menuStatSource = this.appMenuService.getMenuStat.subscribe(stat => {
      if (stat === 'show') {
        this.isActive = true;
      } else {
        this.isActive = false;
      }

    })

  }

  toggleMenu() {
    if (this.isActive) {
      this.appMenuService.setMenuStat('hide');
    }
  }

  ngOnDestroy(): void {
    if (this.menuStatSource) {
      this.menuStatSource.unsubscribe();
    }

  }
}
