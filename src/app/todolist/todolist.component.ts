import { Component, OnInit } from '@angular/core';

interface Todo {
  id: number;
  title: string;
  completed: string;
}
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  title: string = "To Do List";
  todoInput: string = '';
  isComplete: boolean = false;
  todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {}

  createTodo() {
    // Increment the id for the new todo
    const newId = this.todos.length + 1;

    // Add the new todo with the incremented id
    this.todos.push({ id: newId, title: this.todoInput, completed: 'not complete' });

    // Clear the input after adding a todo
    this.todoInput = '';
  }

  markComplete(todoId: number): void {
    const todo = this.todos.find(t => t.id === todoId);
    if (todo) {
      todo.completed = 'completed'; // or toggle the completion status based on your logic
    }
  }
}
