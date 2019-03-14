import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: [ `    
    mgl-map {
   height: 80vh;
   width: 80vw;
  }
  `]

})
export class AppComponent {
  map : any;
}
