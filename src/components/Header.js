import React from 'react';
import styled from 'styled-components';

const HeadCustom = styled.h1`
    font-size: 5.5rem;
    margin: 20px 0;
`;

function Header() {
    return (
        <div>
            <HeadCustom>NASA Photo of the day!</HeadCustom>
        </div>
    )
}

export default Header;