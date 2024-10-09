import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { NightModeDirective } from "../directives/night-mode/night-mode.directive";
import { AppHeaderDirective } from "../directives/app-header/app-header.directive";
import { AppButtonComponent } from "./app-button/app-button.component";
import { MenuButtonComponent } from "./menu-button/menu-button.component";

@NgModule({
  declarations: [HeaderComponent , NightModeDirective,
    AppHeaderDirective, AppButtonComponent,
    MenuButtonComponent ],
  imports: [CommonModule],
  exports: [HeaderComponent,AppButtonComponent,MenuButtonComponent  ]
})

export class SharedModule {

}
