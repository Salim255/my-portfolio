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
   setTimeout(() => {
    this.loadingSubject.next(false);
   },1500)
  }
}
