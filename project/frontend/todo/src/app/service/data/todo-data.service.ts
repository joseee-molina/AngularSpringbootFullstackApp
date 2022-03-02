import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(
      //Todo[] means we are expecting an array of todos instead of just one
      `http://localhost:8181/users/${username}/todos`
    );

    //console.log('Execute hello world bean service');
  }
}
