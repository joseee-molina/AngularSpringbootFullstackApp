import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [];
  //= [
  //   new Todo(1, 'Learn Japanese', false, new Date()),
  //   new Todo(2, 'Travel the world', false, new Date()),
  //   new Todo(3, 'Be an Angular pro', false, new Date()),
  // ];

  constructor(private todoService: TodoDataService) {}

  ngOnInit(): void {
    this.todoService
      .retrieveAllTodos('TavinInTodoServiceCall')
      .subscribe((response) => {
        this.todos = response;
        console.log(response);
      });
  }
}
