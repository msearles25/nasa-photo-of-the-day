import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
cursor: pointer;
background: transparent;
font-size: 16px;
border-radius: 3px;
color: #5ea9c2;
border: 2px solid #5ea9c2;
margin: 20px 20px;
padding: 0.25em 1em;
transition: 0.5s all ease-out;
width: 150px;
&:hover {
  background-color: #5ea9c2;
  color: white;
`;

function Button() {
    return (
        <div>
            <CustomButton>Previous Day</CustomButton>
            <CustomButton>Next Day</CustomButton>
        </div>    
    )
}

export default Button;