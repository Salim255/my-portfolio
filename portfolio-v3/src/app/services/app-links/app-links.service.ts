import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

type Link = 'home' | 'skills' | 'work' | 'contact' | 'about';

@Injectable({
  providedIn: 'root'
})
export class AppLinksService {

  activeLinkSource = new BehaviorSubject<string>('home')
  constructor(){}

  setActiveLink(link: Link ) {
    this.activeLinkSource.next(link);
  }

  get getActiveLink( ) {
    return this.activeLinkSource.asObservable();
  }
}
