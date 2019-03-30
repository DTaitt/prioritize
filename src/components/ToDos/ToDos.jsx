import React from 'react'
import styled from 'styled-components'

const ToDos = ({ className }) => (
    <section className={className}>
        <h1 className="to-do-list">TO DO SECTION</h1>
        {/* { children } */}
        List of Todos
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
    padding: 10px 0; 
`

export default StyledTodos