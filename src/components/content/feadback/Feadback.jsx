import React from 'react';
import classes from './Feadback.module.css';
import Users from './users/Users';
import Dialogs from './dialogs/Dialog';



const Feadback = (props) => {
    
    return (
        <div className={classes.wrapper}>

            <Users users={props.state.feedback.usersData} />
            <Dialogs dialogs={props.state.feedback.dialogsData} message={props.message} />

        </div>
    )
}

export default Feadback;