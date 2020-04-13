import React from 'react';
import Pulse from './Pulse';
import MeterBox from './MeterBox';

export default function Skill(){
    return(
        <div className='skill tab'>
        <h3>Here are the things I know</h3>
            <div className='container'>
            <MeterBox title='HTML' score='10/10' value='1' />
            <MeterBox title='CSS' score='9.5/10' value='0.95' />
            <MeterBox title='Sass' score='9/10' value='0.9' />
            <MeterBox title='Javascript' score='9/10' value='0.9' />
            <MeterBox title='MongoDB' score='7/10' value='0.7' />
            <MeterBox title='Express' score='7/10' value='0.7' />
            <MeterBox title='React JS' score='7/10' value='0.7' />
            <MeterBox title='Node JS' score='8/10' value='0.8' />
            <MeterBox title='Figma' score='9/10' value='0.9' />
            </div>
            <Pulse />
        </div>
    )
}