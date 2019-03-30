import React from 'react'
import { Header as SemHeader } from 'semantic-ui-react';
import styled from 'styled-components'

const Header = ({ className }) => (
    <SemHeader className={className}>HEADER</SemHeader>
)

const StyledHeader = styled(Header)`
    background: coral;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 !important;
`

export default StyledHeader