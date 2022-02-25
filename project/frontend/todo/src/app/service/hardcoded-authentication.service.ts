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
    if (username == 'tavin' && password == 'dummy') {
      return true;
    }
    return false;
  }
}
