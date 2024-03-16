import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo, TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements AfterViewChecked {
  private todosService = inject(TodosService);
  @Input({required: true}) todo!: Todo;

  @Output() remove = new EventEmitter<Todo>();

  @ViewChild('todoInputRef') inputRef?: ElementRef;

 
   title = '';

   isEditing = false;

  toggleTodo(): void {
        this.todo.completed =! this.todo.completed;
        this.todosService.toggleTodo(this.todo.id,this.todo.completed);
    }

    removeTodo(): void {
      this.remove.emit(this.todo);
    }

    startEdit() {
      this.isEditing = true;
      this.title = this.todo.title;
    }

    handleBlur(e: Event) {
      this.isEditing = false;
    }

    handleFocus(e: Event) {
      this.title = this.todo.title;
    }

    updateTodo() {
      if (!this.title) {
        this.remove.emit(this.todo);
      } else {
        this.todo.title = this.title;
      }
      this.todosService.updateTodo(this.todo.id,this.todo.title);
      this.isEditing = false;
    }
    
    ngAfterViewChecked(): void {
      if (this.isEditing) {
        this.inputRef?.nativeElement.focus();
      }
    }
}
