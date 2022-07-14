import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './User.module.css';


const UserList = (props) => {

    let path = './feadback/' + props.id;

    return (
        <li><NavLink to={path} className={classes.link}>{props.name}</NavLink></li>
    );
}

const Users = (props) => {

    let users = props.users;
    let usersArray = users.map(elem => <UserList name={elem.name} id={elem.id} />);

    return (
        <div className={classes.wrapper}>
            <ul>
                {usersArray}
            </ul>
        </div>
    )
}

export default Users;