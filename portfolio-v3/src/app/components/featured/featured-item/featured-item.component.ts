import { Component, Input } from "@angular/core";

@Component({
  selector: "app-featured-item",
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.scss']
})

export class FeaturedItemComponent {
  @Input() item: any;
  constructor(){}
}
