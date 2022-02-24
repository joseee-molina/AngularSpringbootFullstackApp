import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
//importing modules was incorporated in ES6

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  message: string = 'hello my brotha';
  name = '';
  constructor(private route: ActivatedRoute) {}
  //The constructor is needed
  //The welcome component must accept the parameter of /:name
  //So, we inject the dependency ActivatedRoute (what is the route that is currently active)
  //I need to get the active route and then get the parameter passed in
  //Now, we pickupt the route parameter name
  ngOnInit(): void {
    console.log(this.message);
    //We pickup the route parameter name here
    //console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }
  //We have to say : void so that we know it returns nothing (TS)
}

export class Class1 {
  //Export means that we want to use this class in another file (module)
}
