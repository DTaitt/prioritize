import { Button, Collection } from 'react-materialize'
import React, { useState } from 'react'

import SingleTodo from '../SingleTodo/SingleTodo';
import _isEmpty from 'lodash.isempty'
import styled from 'styled-components'
import uniqid from 'uniqid'

const ToDos = ({ className }) => {

    const [ todos, setTodos ] = useState([])

    const addTodo = () => setTodos(prevTodos => [ 
        ...prevTodos, 
        { id: uniqid(), text: 'Lorem ipsum dolor sit amet, vix ei elit doctus mandamus. Id cum indoctum persequeris, eos viderer dolorem ad' }]
    )

    const removeTodo = (id) => setTodos(prevTodos => prevTodos.filter((todo) => id !== todo.id))

    return(
        <StyledSection className={className}>
            <h1 style={{margin: '20px'}} className="to-do-list">
                To-Dos
            <StyledButton small onClick={addTodo}>Add</StyledButton>
            </h1>
            <StyledCollection >
                {
                    _isEmpty(todos)
                    ? <p>Start adding some todos!</p>
                    : todos.reverse().map(todoItem => <SingleTodo
                        key={todoItem.id}
                        id={todoItem.id}
                        text={todoItem.text}
                        removeTodo={removeTodo}
                    />)
                }
            </StyledCollection>
        </StyledSection>
    )
}


const StyledSection = styled.section`
    position: relative;
`

const StyledButton = styled(Button)`
    position: absolute;
    top: 0;
    right: 0;
`

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