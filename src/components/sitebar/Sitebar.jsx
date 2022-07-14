import React from 'react';
import classes from './Sitebar.module.css';
import { NavLink } from 'react-router-dom';


const Sitebar = () => {
    const ListValue = (props) => <NavLink to={props.way} className={setActive} >{props.value}</NavLink>
    const setActive = ({ isActive }) => (isActive ? classes.active : classes.inactive);

    return (
        <div className={classes.sitebar}>
            <ul>
                <li className={classes.item}> {<ListValue way='/profile' value='Profile' />} </li>
                <li className={classes.item}> {<ListValue way='/myProgect' value='My Project' />} </li>
                <li className={classes.item}> {<ListValue way='/' value='My Life' />} </li>
                <li className={classes.item}> {<ListValue way='/' value='My Hobby' />} </li>
                <li className={classes.item}> {<ListValue way='/feadback' value='Feedback' />} </li>
            </ul>
        </div>
    );
}


export default Sitebar;
