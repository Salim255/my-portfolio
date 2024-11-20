import { Component, HostListener, Input } from "@angular/core";

@Component({
  selector: "app-featured-item",
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.scss']
})

export class FeaturedItemComponent {
  @Input() item: any;
  constructor(){

  }
  ngOnInit() {
    console.log('Component initialized');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    console.log('Scroll detected:', event);
  }

}
