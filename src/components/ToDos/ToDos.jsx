import { Button, List } from 'semantic-ui-react'

import React from 'react'
import styled from 'styled-components'

const ToDos = ({ className }) => (
    <section className={className}>
        <h1 style={{margin: '20px'}} className="to-do-list">To-Dos</h1>
        <List style={{margin: 0, padding: '10px', overflow: 'scroll'}} as='ul' divided verticalAlign='middle'>
            {
                [1,2,3,4,5,2,2,2,2,2].map((toDoItem, i) => (
                    <List.Item className='todo_item' key={i}>
                        <StyledListContent className='todo_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, natus quasi. Exercitationem ea corporis, voluptatum, nam maxime saepe distinctio quidem excepturi magni atque explicabo mollitia sapiente ratione odit, sunt est!</StyledListContent>
                        <List.Content floated='right'>
                            <Button negative>Delete</Button>
                        </List.Content>
                    </List.Item>
                ))
            }
        </List>
    </section>
)

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

const StyledList = styled(List)`
    margin: 0;
`

const StyledListContent = styled(List.Content)`
    padding-bottom: 20px;
    line-height: 1.4em !important;
`

export default StyledTodos