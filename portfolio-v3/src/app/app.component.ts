import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AppLoadingService } from './services/app-loading/app-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-v3';
  loading= true;
  timeOutId:any;
  constructor(private router: Router, private appLoadingService: AppLoadingService){}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.appLoadingService.hide();// Internal navigation, no spinner
      }
    })

    // Full page load/reload
    window.addEventListener('load', () => {
      this.appLoadingService.show();
      this.timeOutId = setTimeout(() => {
        this.appLoadingService.hide();
      }, 2000)
    })

    // Full page reload scenario
    window.addEventListener('beforeunload', () => {
      this.appLoadingService.hide();
      if (this.timeOutId) {
        clearTimeout(this.timeOutId);
      }
    });

    this.appLoadingService.getLoading$.subscribe(isLoading => {
      this.loading = isLoading;
    })
  }

  ngOnDestroy(): void {
    if (this.timeOutId) {
      clearTimeout(this.timeOutId)
    }
  }
}
