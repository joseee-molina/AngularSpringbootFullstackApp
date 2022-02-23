import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
//importing modules was incorporated in ES6

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  message: string = 'hello my brotha';
  constructor() {}
  //The constructor is needed

  ngOnInit(): void {
    console.log(this.message);
  }
  //We have to say : void so that we know it returns nothing (TS)
}

export class Class1 {
  //Export means that we want to use this class in another file (module)
}
