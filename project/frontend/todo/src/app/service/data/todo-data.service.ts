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
  deleteTodo(username: string, id: number) {
    return this.http.delete(
      `http://localhost:8181/users/${username}/todos/${id}`
    );
  }

  retrieveTodo(username: string, id: number) {
    return this.http.get<Todo>(
      `http://localhost:8181/users/${username}/todos/${id}`
    );
  }
  updateTodo(username: string, id: number, todo: Todo) {
    return this.http.put(
      `http://localhost:8181/users/${username}/todos/${id}`,
      todo
      //remember, now that we are putting, we not only need to specify
      //username and id, but also the body of the update, which is the todo object
    );
  }
  createTodo(username: string, todo: Todo) {
    return this.http.post(
      `http://localhost:8181/users/${username}/todos/`,
      todo
      //remember, now that we are putting, we not only need to specify
      //username and id, but also the body of the update, which is the todo object
    );
  }
}
