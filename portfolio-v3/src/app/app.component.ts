import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppLoadingService } from './services/app-loading/app-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-v3';
  loading = true;
  timeOutId:any;
  constructor(private router: Router, private appLoadingService: AppLoadingService){}

  ngOnInit(): void {
    // Set loading to true by default on initial load
    this.appLoadingService.show();


    this.appLoadingService.getLoading$.subscribe(isLoading => {
      this.loading = isLoading;
      console.log("Loadin service", isLoading);
    })
  }


  ngAfterViewInit(): void {
   // Once the view has initialized, hide the spinner after a short delay
    if (this.timeOutId) {
      clearTimeout(this.timeOutId);
    }
     this.timeOutId = setTimeout(() => {
        this.appLoadingService.hide();
      }, 1500)
  }

  ngOnDestroy(): void {
    if (this.timeOutId) {
      clearTimeout(this.timeOutId)
    }
  }
}
