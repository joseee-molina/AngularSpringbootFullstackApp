import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(
      'http://localhost:8181/hello-world/path-variable/Tavin'
    );

    //console.log('Execute hello world bean service');
  }
  executeHelloWorldBeanServiceWithParameter(name: string) {
    let basicAuthString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthString,
    });
    return this.http.get<HelloWorldBean>(
      'http://localhost:8181/hello-world/path-variable/' + name,
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
}
