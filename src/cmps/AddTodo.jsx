import React, { Component } from 'react'
import { useState } from 'react'

export function AddTodo(props) {
    const [txt, setTxt] = useState('');

    function submit(ev) {
        ev.preventDefault();
        props.addTodo(txt);
        setTxt('');
    }

    return <form  className="add-todo flex justify-between fs28" onSubmit={submit}>
            <input placeholder="Add a todo..." value={txt} onChange={ev => setTxt(ev.target.value)} type="text" />
            <button onClick={submit}>Add</button>
        </form>
}