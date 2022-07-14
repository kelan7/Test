import React from 'react';
import classes from './inputs.module.css';

const Inputs = () => {

    return (
        <div className={classes.wrapper}>
            <input type='text' placeholder='Enter your nickname' />
            <input type='text' placeholder='Enter your email' />
            
        </div>
    )
}

export default Inputs;