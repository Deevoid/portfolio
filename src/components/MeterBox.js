import React from 'react';
import Meter from './Meter';

export default function MeterBox(props){
    return(
        <div className='meter-box'>
                    <h4 className='skill-name'>{props.title}</h4>
                    <span className="skill-info">{props.score}</span>
                    <Meter value={props.value} />
                </div>
    )
}