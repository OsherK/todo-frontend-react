import React, { useEffect } from 'react';
import { useState } from 'react';
import { AddTodo } from '../cmps/AddTodo';

import { TodoPreview } from '../cmps/TodoPreview';
import { todoService } from '../services/todoService.js';
import { AppHeader } from '../cmps/AppHeader'

export function TodoApp(props) {
    const [loaded, setLoaded] = useState(false);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        loadTodos();
    }, [])

    async function loadTodos() {
        const res = await todoService.query();
        setTodos(res);
        setLoaded(true);
    }

    async function deleteTodo(id) {
        await todoService.remove(id);
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    async function addTodo(txt) {
        if (!txt) return;
        const todo = await todoService.add(txt);
        setTodos(todos => [todo, ...todos]);
    }

    async function updateTodo(todo) {
        await todoService.update(todo);
        setTodos(todos => todos.map(currTodo => currTodo.id === todo.id ? todo : currTodo))
    }

    if (!loaded) return <h1>Loading...</h1>
    return <div className="todo-app">
        <AppHeader todos={todos} />
        <section className="app-body">
            <AddTodo addTodo={addTodo} />
            <ul>
                {todos.map(todo => <TodoPreview updateTodo={updateTodo} deleteTodo={deleteTodo} todo={todo} key={todo.id} />)}
            </ul>
        </section>
    </div>
}