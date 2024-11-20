import { Component, HostListener } from "@angular/core";
import { Subscription } from "rxjs";
import { AppMenuService } from "src/app/services/app-menu/app-menu.service";
@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent {
  isActive:boolean = false;
  private menStatusSource!: Subscription;
  constructor(private menuService : AppMenuService ){}

  ngAfterViewInit(): void {
    this.menStatusSource = this.menuService.getMenuStat.subscribe(state => {
          if (state === 'hide') {
            this.isActive = false;
          }
    })
  }

  onToggleMenu(){
    console.log(this.isActive, "hello toggle");

      if (this.isActive) {
        this.isActive = false;
        this.menuService.setMenuStat('hide')
      } else {
        this.isActive = true;
        this.menuService.setMenuStat('show')
      }
  }

  ngOnDestroy(): void {
    if (this.menStatusSource){
      this.menStatusSource.unsubscribe();
    }
  }
}
