import React from 'react';

function ApodCard (props) {
    

    return (
        <div>
            <img src={props.imgUrl} alt='astronomy picture'/>;
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

export default ApodCard;