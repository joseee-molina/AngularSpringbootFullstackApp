import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css'],
})
export class ErrorsComponent implements OnInit {
  errorMessage = 'Some error ocurred, contact support please!';
  constructor() {}

  ngOnInit(): void {}
}
