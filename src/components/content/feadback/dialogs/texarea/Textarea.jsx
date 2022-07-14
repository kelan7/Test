import React from 'react';
import classes from './textarea.module.css';
import Inputs from './inputs/Input';
import Button from './button/Button';

const Textarea = (props) => {
    
    let newMessageElem = React.createRef();
    
    let addNewMessage = () => {
        
        let message = newMessageElem.current.value;
       props.message(message);
    }

    return (
        <div className='wrapper'>
            <Inputs />
            <textarea className={classes.textarea} ref={newMessageElem} />
            <Button event={addNewMessage} />
        </div>
    )
}

export default Textarea;