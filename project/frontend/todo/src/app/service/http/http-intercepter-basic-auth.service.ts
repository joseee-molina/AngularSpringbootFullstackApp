import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common//http';

@Injectable({
  providedIn: 'root',
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'tavin';
    let password = 'dummy';
    let basicAuthenticationHeaderString =
      'Basic ' + window.btoa(username + ':' + password);
    //console.log(basicAuthenticationHeaderString);
    request = request.clone({
      setHeaders: {
        Authorization: basicAuthenticationHeaderString,
      },
    });
    return next.handle(request);
    /**
    What we did here was intercepting a request, setting a header for an authorization. 
    The HttpInterceptor acts like a filter, and then the next is the next HttpHandleer will handle the request
    So we are sending the modified request

     */
  }
}
