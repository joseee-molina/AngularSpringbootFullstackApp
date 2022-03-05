import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  id: number;
  todo: Todo;

  ngOnInit(): void {
    this.todo = new Todo(0, '', false, new Date());
    this.id = this.route.snapshot.params['id'];
    this.todoService.retrieveTodo('tavin', this.id).subscribe((data) => {
      this.todo = data;
    });
  }
  saveTodo() {
    this.todoService
      .updateTodo('tavin', this.id, this.todo)
      .subscribe((data) => {
        //returns back the content of the updated todo
        console.log(data);
        //for now, let's just log
        this.router.navigate(['/todos']);
      });
  }
}
