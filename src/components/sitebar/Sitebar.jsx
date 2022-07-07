import React from 'react';
import classes from './Sitebar.module.css';
import { NavLink } from 'react-router-dom';


const Sitebar = () => {

    const setActive = ({ isActive }) => (isActive ? classes.active : classes.inactive);

    return (
        <div className={classes.sitebar}>
            <ul>
                <li className={classes.item}><NavLink to='/profile' className={setActive} >Profile</NavLink></li>
                <li className={classes.item}><NavLink to='/myProgect' className={setActive}>My Project</NavLink></li>
                <li className={classes.item}><NavLink to='/myLife' className={setActive}>My Life</NavLink></li>
                <li className={classes.item}><NavLink to='/myHobby' className={setActive}>My Hobby</NavLink></li>
            </ul>
        </div>
    );
}


export default Sitebar;
