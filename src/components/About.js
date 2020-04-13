import React from 'react';
import Pulse from './Pulse';



export default function About(){
    
      
   
    return(
        <div className='about tab'>
        <Pulse />
            <div className='hero'>
                <img src={`${process.env.PUBLIC_URL}/img/dp.png`} alt="DP" />
                <div className='hero-text'>
                    <h3>Hello</h3>
                    <h1>I am Dev</h1>
                </div>
            </div>
            <div className='desc'>
                <h3>I build</h3>
                <h2 className='typed'> </h2>
            </div>
            <div className='info'>
                <p>I am a Full-Stack web developer who loves to innovate new designs.<br />
                    While not freelancing or creating a new design concept,you can find me playing video games and scraping the internet for some ideas.
                    I've hands on experience in Logo designing and SEO optimization.<br />
                    Want to start a project? Hit me up!</p>
            </div>
            
        </div>
    )
}