import { Component } from "@angular/core";

@Component({
  selector: 'app-methodology',
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.scss']
})

export class MethodologyComponent {
  methodology = ['Design', 'Build', 'Test', 'Launch'];

  constructor(){}

  ngOnInit() {

  }

}
