import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common//http';

@Injectable({
  providedIn: 'root',
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  constructor(private basicAuthenticationService: BasicAuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'tavin';
    // let password = 'dummy';
    /**
     * Commented hardcoded code
     */
    // let basicAuthenticationHeaderString =
    //   'Basic ' + window.btoa(username + ':' + password);
    // //console.log(basicAuthenticationHeaderString);
    let basicAuthenticationHeaderString =
      this.basicAuthenticationService.getAuthenticatedToken();

    let username = this.basicAuthenticationService.getAuthenticatedUser();
    if (basicAuthenticationHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthenticationHeaderString,
        },
      });
    }

    return next.handle(request);
    /**
    What we did here was intercepting a request, setting a header for an authorization. 
    The HttpInterceptor acts like a filter, and then the next is the next HttpHandleer will handle the request
    So we are sending the modified request

     */
  }
}
