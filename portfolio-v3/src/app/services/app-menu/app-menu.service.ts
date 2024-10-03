import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

type MenuStat = 'hide' | 'show';

@Injectable({
  providedIn: 'root'
})
export class AppMenuService {

  private menStatSource = new BehaviorSubject<string | null>(null)
  constructor(){}

  setMenuStat(input: MenuStat){
      this.menStatSource.next(input);
  }

  get getMenuStat(){
    return this.menStatSource.asObservable();
  }
}
