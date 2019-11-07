import React from 'react';
import styled from 'styled-components';
import Button from './Button'


const ParaCustom = styled.p`
    font-family: Georgia, serif;
    width: 55%;
    margin: 0 auto;
`;

const ImgCustom = styled.img`
    width: 45%;
    margin: 20px 0;
    padding: 25px;
    border: 5px solid black;
    background: #add8e6;
`;

function ApodCard (props) {


    return (
        <div>
            <ImgCustom src={props.imgUrl} alt='astronomy picture'/>
            <Button />
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <ParaCustom>{props.desc}</ParaCustom>
        </div>
    )
}

export default ApodCard;