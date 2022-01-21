import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { setFilter } from 'src/app/filter/filter.actions';
import { removeCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  filterSelected: string = 'All';
  filters: string[] = ['All', 'Completed', 'Pendings'];
  pendings!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.filterSelected = state.filter;
      this.pendings = state.todos.filter((todo) => !todo.complete).length;
    });
  }

  changeFilter(filter: string) {
    this.store.dispatch(setFilter({ filter: filter }));
  }

  removeCompleted() {
    this.store.dispatch(removeCompleted());
  }
}
