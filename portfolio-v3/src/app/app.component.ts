import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AppLoadingService } from './services/app-loading/app-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-v3';
  loading= true;

  constructor(private router: Router, private appLoadingService: AppLoadingService){}
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.appLoadingService.hide();// Internal navigation, no spinner
      }
    })
     // Show spinner on full page load
    window.addEventListener('beforeunload', () => {
      this.appLoadingService.show();
    });

    this.appLoadingService.getLoading$.subscribe(isLoading => {
      this.loading = isLoading;
    })
  }
}
