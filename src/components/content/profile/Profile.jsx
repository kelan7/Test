import React from 'react';
import classes from './Profile.module.css';
import Photo from '../../../images/photoProfile.png';

const Profile = () => {
    
    return (
        <div className={classes.prof}>
            <div className={classes.photo}>
                <img src ={Photo} alt ='myPhoto'/>
            </div>
            <div className={classes.content}>
                <h2>Profile</h2>
                <p>Some many text Some many text Some many text Some many text Some many text Some many text Some many text Some many text Some many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many text Some many text Some many text Some many text Some many text Some many text Some many text Some many text Some many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many textSome many text</p>
            </div>
            
        </div>
    );
}
export default Profile;