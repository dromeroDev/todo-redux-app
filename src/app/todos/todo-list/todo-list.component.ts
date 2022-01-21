import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Todo } from '../models/todo.model';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos!: Todo[];
  completed: boolean = false;
  filterSelected!: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.todos = state.todos;
      this.filterSelected = state.filter;
    });
  }

  toggleAll() {
    this.completed = !this.completed;
    this.store.dispatch(toggleAll({ completed: this.completed }));
  }
}
