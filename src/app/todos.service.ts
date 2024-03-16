import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { initSupabase } from './utils/initSupabase';


export interface Todo {
  id: number; 
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  todos: Todo[] = [];
  curr_id :number;
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(initSupabase.supabaseUrl,initSupabase.supabaseKey);
    this.loadTodos();
  }

  async loadTodos(): Promise<void> {
    const { data, error } = await this.supabase.from<Todo>('todo-list').select('*');
    if (error) {
      console.error('Error fetching todos from Supabase:', error.message);
      return;
    }
    this.todos = data || [];
    // Get the ID of the last item
    const lastTodo = this.todos[this.todos.length - 1];
    this.curr_id = lastTodo?.id || 0;
  }

    async addItem(title: string): Promise<void> {
      const todo: Todo = {
        id:++this.curr_id,
        title,
        completed: false,
      };

      try {
        const { data, error } = await this.supabase.from<Todo>('todo-list').insert([todo]);
       
        if (error) {
          console.error('Error adding todo to Supabase:', error.message);
        } else {
          console.log('Todo added successfully to Supabase:', data);
          this.todos.push(data[0]);
        }} catch (error) {
        console.error('Error adding todo', error.message);
      }
    }

    async removeItem(id: number): Promise<void> {
      try {
        const response = await this.supabase
          .from('todo-list')
          .delete()
          .eq('id', id);
    
        this.todos = this.todos.filter(t => t.id !== id); // Update local state
        console.log('Todo removed successfully from Supabase');
      } catch (error) {
        console.error('Error removing todo', error.message);
      }
    }
    

    async clearCompleted(): Promise<void> {
        try {
          await this.supabase.from<Todo>('todo-list').delete().match({ completed: 'true' });
          this.todos = this.todos.filter(todo => !todo.completed);
          console.log('Completed todos removed successfully from Supabase');
        } catch (error) {
          console.error('Error clearing completed todos', error.message);
        }
    }

    toggleAll(completed: boolean): void {
      this.todos = this.todos.map((todo) => ({ ...todo, completed }));
    }

    getItems(type = 'all'): Todo[] {
      switch (type) {
        case 'active':
          return this.todos.filter((todo) => !todo.completed);
        case 'completed':
          return this.todos.filter((todo) => todo.completed);
      }
      return this.todos;
    }

    async toggleTodo(id: number, completed: boolean): Promise<void> {
        try{
        const { data, error } = await this.supabase
          .from<Todo>('todo-list')
          .update({ completed: completed })
          .eq('id', id);

        if (error) {
          console.error('Error updating todo:', error.message);
          return ;
        } } catch (error) {
          console.error('Error adding todo', error.message);
        }
    }

    async updateTodo(id: number,title: string): Promise<void> {
      try {
        const { data, error } = await this.supabase
          .from<Todo>('todo-list')
          .update({ title: title })
          .eq('id', id);
    
        if (error) {
          console.error('Error updating todo to supabase', error.message);
          return;
        } } catch (error) {
        console.error('Unexpected error updating todo:', error.message);
      }
    }

}
