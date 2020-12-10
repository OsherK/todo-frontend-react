import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export function TodoPreview(props){
    const {todo, deleteTodo, updateTodo} = props;
    const [isEditable, setEditable] = useState(false);
    const nameRef = useRef(null);

    function updateIsComplete({target}){
        const newTodo = {
            ...todo,
            isComplete: target.checked
        }
        updateTodo(newTodo);
    }

    function updateName(){
        setEditable(false);
        const newTodo = {
            ...todo,
            name: nameRef.current.innerHTML
        }
        updateTodo(newTodo);
    }

    useEffect(() =>{
        nameRef.current.focus();
    }, [isEditable])
    
    return <li className={(todo.isComplete ? "todo-done" : "todo-not-done") + " todo-preview relative flex column justify-center"}>
        <h4
        suppressContentEditableWarning={true}
        className={(isEditable ? "editing" : "not-editing") +" todo-name"}
        ref={nameRef} 
        contentEditable={isEditable}
        onClick={() => setEditable(true)} 
        onBlur={updateName}>{todo.name}</h4>
        <input onChange={updateIsComplete} checked={todo.isComplete} className="toggle-done absolute" type="checkbox"/>
        <button onClick={()  => deleteTodo(todo.id)} className="delete-todo-btn absolute">X</button>
    </li>
}