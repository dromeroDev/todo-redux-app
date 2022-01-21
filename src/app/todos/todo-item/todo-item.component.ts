import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputEdit') txtInputEdit!: ElementRef;

  checkComplete!: FormControl;
  editInput!: FormControl;
  editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkComplete = new FormControl(this.todo.complete);
    this.editInput = new FormControl(this.todo.text, Validators.required);

    this.checkComplete.valueChanges.subscribe((value) => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  edit() {
    this.editing = true;
    this.editInput.setValue(this.todo.text);

    setTimeout(() => {
      this.txtInputEdit.nativeElement.select();
    }, 1);
  }

  remove() {
    this.store.dispatch(actions.remove({ id: this.todo.id }));
  }

  save() {
    this.editing = false;

    if (this.editInput.invalid || this.editInput.value === this.todo.text)
      return;

    this.store.dispatch(
      actions.edit({
        id: this.todo.id,
        text: this.editInput.value,
      })
    );
  }
}
