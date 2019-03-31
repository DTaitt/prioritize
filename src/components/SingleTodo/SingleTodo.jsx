import { Button, CollectionItem } from 'react-materialize'

import React from 'react'
import styled from 'styled-components'

const SingleTodo = (props) => (
    <StyledCollectionItem className='todo_item'>
        {props.text}
        <StyledButton onClick={() => props.removeTodo(props.id)}>Delete</StyledButton>
    </StyledCollectionItem>
)

const StyledCollectionItem = styled(CollectionItem)`
    width: 100%;
    position: relative;
    padding-bottom: 20px;
`

const StyledButton = styled(Button)`
    position: absolute;
    bottom: 0;
    right: 0;
`

export default SingleTodo