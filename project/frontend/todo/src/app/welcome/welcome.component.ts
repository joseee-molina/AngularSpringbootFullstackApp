import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
//importing modules was incorporated in ES6

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  message: string = 'hello my brotha';
  name = '';
  welcomeMessageFromService: string = '';
  errorMessage: string = '';
  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) {}
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

  getWelcomeMessageWithParameter() {
    //console.log('Getting welcome sessage my friend!!');
    console.log(this.welcomeDataService.executeHelloWorldBeanService());
    //THe oservable is not really executed here, unitl we do somehting called subscribe
    //Observable helps us see what's it before we get it, so that we can validate that we get the things that we wanted
    this.welcomeDataService
      .executeHelloWorldBeanServiceWithParameter(this.name)
      .subscribe(
        (response) => this.handleSuccesfulResponse(response),
        (error) => this.handleErrorResponse(error)
      );
    //With this, we are subscribing to the service
    //However, just like this leaving it, it shoots an error of: Access to XMLHttpRequest at 'http://localhost:8181/hello-world/path-variable/Tavin' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    //What is CORS Policy?
    //Cannot call a web server from another web server (our application). Spring Boot prevents this
    //this.welcomeDataService.executeHelloWorldBeanService().subscribe();
    //this.welcomeDataService.executeHelloWorldBeanService().subscribe();
    //IF we subscribe multiple times, the request gets executed multiple times
    console.log('Last line of getWelcomeMessage');
  }

  handleSuccesfulResponse(response: any) {
    this.welcomeMessageFromService = response.message;
    //console.log(response);
    //console.log(response.message);
  }
  handleErrorResponse(error: any) {
    this.errorMessage = error.error.message;
  }
}

export class Class1 {
  //Export means that we want to use this class in another file (module)
}
