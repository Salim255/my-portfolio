import {Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


type appMode = 'night' | 'day' ;

@Injectable({providedIn: 'root'})

export class AppModeService {
    private appModeStateSource = new BehaviorSubject<string| null>(null);
    constructor(){}

    setAppModeStatus(state: appMode) {
      this.appModeStateSource.next(state);
    }

    get getAppModeStatus() {
      return this.appModeStateSource.asObservable()
    }
}
