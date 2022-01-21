import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/todos/models/todo.model';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: string): Todo[] {
    switch (filter) {
      case 'Completed':
        return todos.filter((todo) => todo.complete);
      case 'Pendings':
        return todos.filter((todo) => !todo.complete);
      default:
        return todos;
    }
  }
}
