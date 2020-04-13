import React from 'react';
import Social from './Social';


export default function Contact(){
    return(
        <div className='contact tab'>
        <div className='container'>
        <h2>Got a project?</h2>
            <div className='email'>
                <span><i className="fas fa-envelope"></i> <a href="mailto:dev.4.pandey@gmail.com?Subject=Hello%20" target="_top">dev.4.pandey@gmail.com</a></span>
            </div>
            <div className='map'>
            <a target='_blank' rel="noopener noreferrer" href="https://www.google.com/maps/place/Pune,+Maharashtra/@18.5248904,73.7228786,11z/data=!3m1!4b1!4m5!3m4!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5204303!4d73.8567437">

            <img src={`${process.env.PUBLIC_URL}/img/map.png`} alt="Location" />
            </a>
            </div>
            <div className='social'>
            <Social
                    bclass='git'
                    link='https://github.com/Deevoid'
                    iclass='fab fa-github'
                 />
                <Social
                    bclass='insta'
                    link='https://www.instagram.com/dee_void/'
                    iclass='fab fa-instagram'
                 />
                 <Social
                    bclass='twitter'
                    link='https://twitter.com/dee_void_'
                    iclass='fab fa-twitter'
                 />
                 <Social
                    bclass='linkedin'
                    link='https://www.linkedin.com/in/deevoid/'
                    iclass='fab fa-linkedin'
                 />
            </div>
            
            <div className='hire'>
            <a href="mailto:dev.4.pandey@gmail.com?Subject=Hello%20I%20have%20a%20Project" target='_blank' rel="noopener noreferrer">
                <button>Hire me</button>
                </a>
            </div>
            </div>
        </div>
    )
}