import React from 'react';

export default function Card(props){
    return(
        <div className='card'>
            <div className='card-heading'>
                <h3> {props.heading} </h3>
            </div>
            <div className='card-body'>
            <div className='card-text'>
                <p> {props.text} </p>
            </div>
            <div className='card-img'>
                <img src={props.img} alt="Project-img" />
            </div>
            </div>
            <div className='card-btn'>
                <a href={props.gitlink} target='_blank' rel="noopener noreferrer"><button>View</button></a>
            </div>

        </div>
    )
}
