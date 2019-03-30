import React from 'react'
import styled from 'styled-components'

const Matrix = ({ className }) => (
    <section className={className}>
        <h1 className="priority-matrix">PRIORITY MATRIX SECTION</h1>
        Priority Matrix goes here
    </section>
)

const StyledMatrix = styled(Matrix)`
    height: 100%;
    background: cornsilk;
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
`

export default StyledMatrix