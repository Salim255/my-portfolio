import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppLoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  getLoading$ = this.loadingSubject.asObservable();

  constructor(){}

  show(){
    this.loadingSubject.next(true);
  }

  hide(){

    this.loadingSubject.next(false);

  }
}
