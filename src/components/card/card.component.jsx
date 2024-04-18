import React from 'react';
import './card.styles.css';


export const Card = (props) => (
    <div className='card-container'>
        <h2> {props.monster.top_work} </h2>
        <img alt="Add this piece to your colloction today!" src={`https://i.pinimg.com/originals/a9/88/bc/a988bccb5dfb2dfb3510af13511e5d3e.jpg`} />
        <h5> Copies available for purchase </h5>
        <p>{props.monster.work_count}</p>
    </div>
)