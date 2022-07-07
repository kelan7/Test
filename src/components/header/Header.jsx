import React from 'react';
import Logo from './Logo';
import Title from './Title'
import classes from './Header.module.css';


const Header = () => {


    return (
        <div className={classes.header}>
            <Logo />
            <Title />
        </div>
    )
}

export default Header;