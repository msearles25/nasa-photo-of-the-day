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

const CustomH2 = styled.h2`
    margin: 0 0 20px 0;
`;

const CustomH3 = styled.h2`
    margin: 0 0 20px 0;
`;

function ApodCard (props) {


    return (
        <div>
            <ImgCustom src={props.imgUrl} alt='astronomy picture'/>
            <Button />
            <CustomH2>{props.title}</CustomH2>
            <CustomH3>{props.date}</CustomH3>
            <ParaCustom>{props.desc}</ParaCustom>
        </div>
    )
}

export default ApodCard;