import { Component } from "@angular/core";

@Component({
  selector: 'app-methodology',
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.scss']
})

export class MethodologyComponent {
  texts = ['Learn', 'Code', 'Deploy', 'Repeat'];
  rotationAngle = 0; // The angle of rotation for the orbit
  intervalId: any;
  currentRotation = [90, 180, 180, 270];
  stage:number = 0;
  startTime:any;;
  //currentRotation: number[] = []; // Track the rotation of each text element
  rotationInterval: any;
  constructor(){}

  ngOnInit() {
    // Simulate rotation by incrementing the angle over time
    this.intervalId = setInterval(() => {
      this.rotationAngle = (this.rotationAngle + 1) % 360; // Update the rotation angle continuously
    }, 100); // Adjust speed of rotation (e.g., 100ms per increment)



    this.startTime = Date.now();

     // Set an interval to update the rotation every 100ms
     this.rotationInterval = setInterval(() => {
       this.updateRotation();
     }, 100); // Change rotation every 100ms
  }

  updateRotation() {
    const totalDuration = 30 * 1000; // 30 seconds converted to milliseconds
    const quarterDuration = totalDuration / 4; // 7.5 seconds
    const currentTime = Date.now(); // Get the current timestamp
    const timeElapsed = (currentTime - this.startTime) % totalDuration; // Time elapsed within the 30-second cycle

    // Increment currentRotation[0] smoothly across the quarters
    if (timeElapsed < quarterDuration) {
      // First quarter (0 to 7.5 seconds) -> 0 to 90 degrees
      this.currentRotation[0] += 0.3;
      if (this.currentRotation[0] >= 90) {
        this.currentRotation[0] = 90; // Clamp to 90 degrees after first quarter
      }
    } else if (timeElapsed < 2 * quarterDuration) {
      // Second quarter (7.5 to 15 seconds) -> 90 to 180 degrees
      this.currentRotation[0] += 0.3;
      if (this.currentRotation[0] >= 180) {
        this.currentRotation[0] = 180; // Clamp to 180 degrees after second quarter
      }
    } else if (timeElapsed < 3 * quarterDuration) {
      // Third quarter (15 to 22.5 seconds) -> 180 to 270 degrees
      this.currentRotation[0] += 0.3;
      if (this.currentRotation[0] >= 270) {
        this.currentRotation[0] = 270; // Clamp to 270 degrees after third quarter
      }
    } else {
      // Fourth quarter (22.5 to 30 seconds) -> 270 to 360 degrees
      this.currentRotation[0] += 0.3;
      if (this.currentRotation[0] >= 360) {
        this.currentRotation[0] = 90; // Reset to 90 degrees after completing the full orbit
      }
    }



   // console.log('Current Rotation:', this.currentRotation[0], timeElapsed , totalDuration);
  }



  ngOnDestroy() {
    if (this.intervalId){
      clearInterval(this.intervalId); // Clear the interval on component destroy
    }


    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
    }
  }


}
