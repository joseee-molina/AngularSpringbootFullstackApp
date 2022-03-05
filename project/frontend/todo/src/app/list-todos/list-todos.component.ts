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
  message: string = '';
  constructor(private todoService: TodoDataService) {}
  deleteTodo(id: number) {
    console.log('Delete todo ' + id);
    this.todoService.deleteTodo('tavin', id).subscribe((response) => {
      console.log(response);
      console.log('Succewfully deleted todo ' + id);
      this.message = 'Delete succesful of todo ' + id;
      this.refreshTodos();
    });
  }
  refreshTodos() {
    this.todoService
      .retrieveAllTodos('TavinInTodoServiceCall')
      .subscribe((response) => {
        this.todos = response;
        console.log(response);
      });
  }
  ngOnInit(): void {
    this.refreshTodos();
  }
}
