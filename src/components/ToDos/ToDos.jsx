import { Button, Collection } from 'react-materialize'
import React, { useState } from 'react'

import CollectionItem from 'react-materialize/lib/CollectionItem';
import _isEmpty from 'lodash.isempty'
import styled from 'styled-components'
import uniqid from 'uniqid'

const ToDos = ({ className }) => {

    const [ todos, setTodos ] = useState([])

    const addTodo = () => setTodos(prevTodos => [ 
        ...prevTodos, 
        { id: uniqid(), text: 'lorem ipsum' }]
    )

    const removeTodo = (id) => setTodos(prevTodos => prevTodos.filter((todo) => id !== todo.id))

    return(
        <section className={className}>
            <h1 style={{margin: '20px'}} className="to-do-list">
                To-Dos
            <Button small onClick={addTodo}>Add</Button>
            </h1>
            <StyledCollection >
                {
                    _isEmpty(todos)
                    ? <p>Start adding some todos!</p>
                    : todos.map(todoItem => (
                        <CollectionItem className='todo_item' key={todoItem.id}>
                            {todoItem.text}
                            <Button onClick={() => removeTodo(todoItem.id)}>Delete</Button>
                        </CollectionItem>
                    ))
                }
            </StyledCollection>
        </section>
    )
}

const StyledTodos = styled(ToDos)`
    background: lightgrey;
    flex: 1;
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0; 
`

const StyledCollection = styled(Collection)`
    width: 90%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default StyledTodos