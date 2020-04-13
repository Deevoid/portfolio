import React from 'react';

export default function Social(props){
    return(
        <button className={props.bclass}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <span><i className={`${props.iclass}`}></i></span>
            </a>
        </button>
    )
}