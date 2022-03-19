import { API_URL } from './../app.constants';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
//@Injectable is what makes this a service.
//everything else is the same as a normal class
export class BasicAuthenticationService {
  //we can innject this service in any place we want
  constructor(private http: HttpClient) {}

  /**
   * We don't need that code anymore
   *
   */

  executeBasicAuthenticationService(username: string, password: string) {
    let basicAuthenticationHeaderString =
      'Basic ' + window.btoa(username + ':' + password);
    //console.log(basicAuthenticationHeaderString);

    let headers = new HttpHeaders({
      Authorization: basicAuthenticationHeaderString,
    });
    return this.http
      .get<AuthenticationBean>(`${API_URL}/basicauth`, { headers })
      .pipe(
        /**
         * The pipe method tells the code what to do if
         * the request succeeds or if the request
         * fails.
         * So, here we say if it succeeds, it adds the username
         * in the sessionStorage
         */
        map((data) => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', basicAuthenticationHeaderString);
          /**
           * This basic authentication service should be resonsible for both
           * authentication and handling the sessionStorage
           *
           */

          return data;
        })
      );

    //console.log('Execute hello world bean service');
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser');
  }
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }
    return null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
