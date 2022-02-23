import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //The app-root is the way that this component is called in html
  //<app-root></app-root>
  templateUrl: './app.component.html',
  //Where is the location of the HTML template for this component
  //we can put the direct template instead of passing a templateUrl like this
  //template: '<h1>{{title}}</h1>',
  styleUrls: ['./app.component.css'],
  //Where is the location of the styling file for this component
})
export class AppComponent {
  title = 'todo';
  //this title is used in the appcomponent.html
  message = 'welcome to tavo program';
}
