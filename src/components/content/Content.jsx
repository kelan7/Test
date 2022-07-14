import React from 'react';
import { Route, Routes } from 'react-router-dom';
import classes from './Content.module.css';
import Profile from './profile/Profile';
import MyProgect from './myProgect/MyProgect';
import Feadback from './feadback/Feadback';


const Content = (props) => {
    
    return (

        <div className={classes.content}>

            <Routes>
                <Route path='/profile' element={<Profile />} />
                <Route path='/feadback' element={<Feadback state={props.state} message={props.message} />} />
                <Route path='/myProgect' element={<MyProgect />} />
                {/* <Route path='/myLife' element={<MyLife/>} /> */}
                {/* <Route path='/myHobby' element={<MyHobby />} /> */}
            </Routes>
        </div>

    );
}

export default Content;