import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ScrollData } from "src/app/interfaces/scroll-direction.interface";

@Injectable({
  providedIn: 'root'
})
export class ScrollDirectionService {

  private scrollDirectionSource = new BehaviorSubject< ScrollData | null> (null)
  constructor(){}


  setScrollDirectionData(data: ScrollData){
    this.scrollDirectionSource.next(data)
  }

  get getScrollData(){
    return this.scrollDirectionSource.asObservable();
  }
}
