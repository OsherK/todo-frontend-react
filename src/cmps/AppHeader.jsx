import React from 'react'

export function AppHeader(props) {
    const { todos } = props;
    const todosDone = todos.reduce((acc, todo) => {
        if (todo.isComplete) acc += 1;
        return acc;
    }, 0)
    return <header className="app-header relative flex justify-between">
        <h1>Your <br/>Todos</h1>
        <section className="header-right flex column justify-around align-center">
            <h3>Current todos status:</h3>
            <h3>
                {todos.length + ' / ' + todosDone}
            </h3>
            <progress value={todosDone} max={todos.length} >{todosDone / (todos.length / 100) + '%'}</progress>
        </section>
    </header>
}