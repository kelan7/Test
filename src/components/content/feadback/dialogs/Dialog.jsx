import React from 'react';
import classes from './Dialog.module.css';
import Textarea from './texarea/Textarea';


const UserDialog = (props) => {

    return (
        <div className={classes.message}>{props.message}</div>
    );
}

const Dialog = (props) => {

    let dialogs = props.dialogs;
    let dialogArray = dialogs.map(elem => <UserDialog message={elem.message} id={elem.id} />);

    return (
        <div className={classes.wrapper}>
            <div>
                {dialogArray}
            </div>
            <div>
                <Textarea message={props.message} />
            </div>
        </div>
    );
}

export default Dialog;