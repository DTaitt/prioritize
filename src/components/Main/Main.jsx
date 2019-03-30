import React from 'react'
import styled from 'styled-components'

const Main = ({ className, children}) => (
    <section className={className}>
        {children}
    </section>
)

const StyledMain = styled(Main)`
    background: orange;
    height: 90vh;
    display: flex;
    
`

export default StyledMain