import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//@Injectable is what makes this a service.
//everything else is the same as a normal class
export class HardcodedAuthenticationService {
  //we can innject this service in any place we want
  constructor() {}

  authenticate(username: string, password: string) {
    //console.log('before ' + this.isUserLoggedIn());
    if (username == 'tavin' && password == 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      //We can see this by accessing the website's inspect, then Application
      //We see a dictionary of sessionStorage, which has as key authenticatedUser
      //and as value the username logged in
      //console.log('after ' + this.isUserLoggedIn());

      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
