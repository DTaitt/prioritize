import React from 'react'
import styled from 'styled-components'

const Header = ({ className }) => (
    <header className={className}>HEADER</header>
)

const StyledHeader = styled(Header)`
    background: coral;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 !important;
    font-size: 24px !important;
`

export default StyledHeader