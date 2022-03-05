import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

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
  constructor(private todoService: TodoDataService, private router: Router) {}
  deleteTodo(id: number) {
    console.log('Delete todo ' + id);
    this.todoService.deleteTodo('tavin', id).subscribe((response) => {
      console.log(response);
      console.log('Succewfully deleted todo ' + id);
      this.message = 'Delete succesful of todo ' + id;
      this.refreshTodos();
    });
  }
  updateTodo(id: number) {
    console.log(`updated todo ${id}`);
    this.router.navigate(['todos', id]);
  }
  refreshTodos() {
    this.todoService
      .retrieveAllTodos('TavinInTodoServiceCall')
      .subscribe((response) => {
        this.todos = response;
        console.log(response);
      });
  }
  addTodo() {
    this.router.navigate(['todos', -1]);
  }
  ngOnInit(): void {
    this.refreshTodos();
  }
}
