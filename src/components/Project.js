import React from 'react';
import Card from './Card';


export default function Project(){
    return(
        <div className='project tab'>
            <div className='container'>
                <div className='card-div'>
                    <Card
                     heading='Real Time person removal from video'
                     text="Real time person removal from videos using machine learning. Tensorflow and BodyPIX segmentation model." 
                     img={`${process.env.PUBLIC_URL}/img/ai.png`} 
                     gitlink="https://github.com/Deevoid/Person-removal-from-video"
                     />
                     <Card
                     heading='Encryption using steganography'
                     text="Hide your messages in a plain image and send it anywhere." 
                     img={`${process.env.PUBLIC_URL}/img/encrypt.png`} 
                     gitlink="https://github.com/Deevoid/Deevoid.github.io/tree/master/RPS"

                     />
                     <Card
                     heading='Rock Paper Scissor Game'
                     text="Feeling bored? Have fun with a rock paper scissor game." 
                     img={`${process.env.PUBLIC_URL}/img/rps.png`} 
                     gitlink="https://github.com/Deevoid/Deevoid.github.io/tree/master/crypt"

                     />
                     
                </div>
            </div>
        </div>
    )
}