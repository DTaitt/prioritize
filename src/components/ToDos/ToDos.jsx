import { Button, Collection, TextInput } from 'react-materialize'
import React, { useState } from 'react'

import SingleTodo from '../SingleTodo/SingleTodo';
import _isEmpty from 'lodash.isempty'
import styled from 'styled-components'
import uniqid from 'uniqid'

const ToDos = ({ className }) => {
    
    const [ todoText, setTodoText ] = useState('')
    const handleTodoInput = (e) => setTodoText(e.target.value)
    const handleSubmit = (e) => e.key === 'Enter' && addTodo()
    
    const [ todos, setTodos ] = useState([])
    const addTodo = () => {
        if (!_isEmpty(todoText)) {
            setTodos(prevTodos => [ 
                    { id: uniqid(), text: todoText },
                    ...prevTodos
                ]
            )
        }
    }
    const removeTodo = (id) => setTodos(prevTodos => prevTodos.filter((todo) => id !== todo.id))


    return(
        <section className={className}>
            <h1 style={{margin: '20px'}} className="to-do-list">To-Dos</h1>
            <TextInput
                placeholder='Write your todo here'
                onChange={handleTodoInput}
                onKeyPress={handleSubmit}
            />
            <Button small onClick={addTodo}>Add</Button>
            <StyledCollection >
                {
                    _isEmpty(todos)
                    ? <p>Start adding some todos!</p>
                    : todos.map(todoItem => <SingleTodo
                        key={todoItem.id}
                        id={todoItem.id}
                        text={todoItem.text}
                        removeTodo={removeTodo}
                    />)
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

export default React.memo(StyledTodos)