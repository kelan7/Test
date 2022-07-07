import React from "react";
import classes from './Logo.module.css'; 
import logo from '../../images/hog.png'

const Logo = () => {
    

    return (
        <div className={classes.logo}>
            <img  alt='logo' src={logo} />

        </div>
    )
}

export default Logo;