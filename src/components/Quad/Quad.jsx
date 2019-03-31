import Card from 'react-materialize/lib/Card';
import React from 'react'
import styled from 'styled-components'

const Quad = (props) => {
    return(
        <StyledCard 
            className="blue-grey darken-1"
            textClassName="white-text"
            title={props.title}>
        </StyledCard>
    )
}

const StyledCard = styled(Card)`
    margin: 0;
    padding: 5px !important;
    font-size: 18px !important;
    width: 400px;
    .card-title {
        font-size: 20px;
        text-align: center;
        background: coral;
    }
    .card-content {
        padding-top: 5px;
        padding-left: 3px;
    }
`

export default Quad