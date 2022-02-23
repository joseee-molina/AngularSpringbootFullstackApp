import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'tavillooo';
  password = '';
  errorMessage = 'Invalid credentials';
  invalidLogin = false;
  handleLogin() {
    // console.log(this.username);
    //console.log(this.password);
    //never print a password
    if (this.username == 'tavin' && this.password == 'dummy') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
