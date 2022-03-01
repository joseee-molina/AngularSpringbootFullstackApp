import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get(
      'http://localhost:8181/hello-world/path-variable/Tavin'
    );

    //console.log('Execute hello world bean service');
  }
}
