import Quad from '../Quad/Quad';
import React from 'react'
import styled from 'styled-components'

const Matrix = ({ className }) => (
    <section className={className}>
        <MatrixTitle className="priority-matrix">Priority Matrix</MatrixTitle>
        <Board className="board">
            <Quad title='High Importance, High Feasibility' />
            <Quad title='High Importance, Low Feasibility' />
            <Quad title='Low Importance, High Feasibility' />
            <Quad title='Low Importance, Low Feasibility' />
        </Board>
    </section>
)

const MatrixTitle = styled.h1`
    margin: 10px;
`

const StyledMatrix = styled(Matrix)`
    height: 100%;
    background: cornsilk;
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
`

const Board = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    height: 650px;
`

export default StyledMatrix