import { Component } from "@angular/core";

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {
  yearString = new Date().getFullYear() ;
  constructor(){}
}
