import React, { useState } from 'react';
import './card.styles.css';

export const Card = (props) => {
    const [string, setString] = useState('');

    return (
        <div className='card-container'>
            <h2> {props.monster.top_work} </h2>
            <img alt="Add this piece to your collection today!" src={`https://i.pinimg.com/originals/a9/88/bc/a988bccb5dfb2dfb3510af13511e5d3e.jpg`} />
            <h5> Copies available for purchase: {props.monster.work_count} </h5>
            <button className='custom-button' onClick={() => {
                setString('In store purchase only');
            }}> Get yours </button>
            <p>{string}</p>
        </div>
    );
}
