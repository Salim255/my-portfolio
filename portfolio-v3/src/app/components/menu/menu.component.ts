import { Component } from "@angular/core";
import { Subscription, take } from "rxjs";
import { AppMenuService } from "src/app/services/app-menu/app-menu.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  isActive: boolean = false;
  activeIndex: Number = 0;
  links = ['home','about', 'skills' , 'work' , 'contact'];
  private menuStatSource!: Subscription;

  constructor(
     private appMenuService: AppMenuService,
    ){}

  ngAfterViewInit(): void {
    this.menuStatSource = this.appMenuService.getMenuStat.subscribe(state => {
      if (state === "show") {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    })

  }

  setActive(index: Number) {
    this.activeIndex = index;
    if (this.isActive) {
      this.appMenuService.setMenuStat('hide')
    }
  }

  ngOnDestroy(): void {
    if (this.menuStatSource) {
      this.menuStatSource.unsubscribe();
    }
  }
}
