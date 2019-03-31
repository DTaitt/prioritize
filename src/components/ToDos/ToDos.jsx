import { Button, List } from 'semantic-ui-react'
import React, { useState } from 'react'

import _isEmpty from 'lodash.isempty'
import styled from 'styled-components'
import uniqid from 'uniqid'

const ToDos = ({ className }) => {

    const [ todos, setTodos ] = useState([])

    const addTodo = () => setTodos(prevTodos => [ 
        ...prevTodos, 
        { id: uniqid(), text: 'dummy txt' }]
    )

    const removeTodo = (id) => setTodos(prevTodos => prevTodos.filter((todo) => id !== todo.id))

    return(
        <section className={className}>
            <h1 style={{margin: '20px'}} className="to-do-list">
                To-Dos
            <Button positive onClick={addTodo}>Add</Button></h1>
            <List style={{margin: 0, padding: '10px', overflowY: 'auto', width: '90%'}} as='ul' divided verticalAlign='middle'>
                {
                    _isEmpty(todos)
                    ? <p>Start adding some todos!</p>
                    : todos.map(todoItem => (
                        <List.Item className='todo_item' key={todoItem.id}>
                            <StyledListContent className='todo_text'>{todoItem.text}</StyledListContent>
                            <List.Content floated='right'> 
                                <Button negative onClick={() => removeTodo(todoItem.id)}>Delete</Button>
                            </List.Content>
                        </List.Item>
                    ))
                }
            </List>
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

const StyledListContent = styled(List.Content)`
    padding-bottom: 20px;
    line-height: 1.4em !important;
`

export default StyledTodos