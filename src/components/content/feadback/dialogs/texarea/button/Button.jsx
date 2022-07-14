import React from 'react';
import classes from './button.module.css';

const Button = (props) => {
   
    return (
        <div className={classes.wrapper}>
            <button onClick={props.event} >Enter</button>
        </div>
    )
}

export default Button;