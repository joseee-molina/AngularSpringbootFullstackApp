import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
//@Injectable is what makes this a service.
//everything else is the same as a normal class
export class BasicAuthenticationService {
  //we can innject this service in any place we want
  constructor(private http: HttpClient) {}

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

  executeBasicAuthenticationServiceWithParameter() {
    let basicAuthString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthString,
    });
    return this.http.get<AuthenticationBean>(
      'http://localhost:8181/basicauth',
      { headers }
    );

    //console.log('Execute hello world bean service');
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'tavin';
    let password = 'dummy';
    let basicAuthenticationHeaderString =
      'Basic ' + window.btoa(username + ':' + password);
    //console.log(basicAuthenticationHeaderString);

    return basicAuthenticationHeaderString;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('authenticatedUser');
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
