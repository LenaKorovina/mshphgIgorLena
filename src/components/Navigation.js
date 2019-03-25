import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () =>{
    return(
        <div>
            <NavLink to='/main'>Main</NavLink>
            <NavLink to='/homepage'>Homepage</NavLink>
            <NavLink to='/registration'>Registration</NavLink>
            <NavLink to='/calendar'>Calendar</NavLink>
            <NavLink to='/notification'>Notification</NavLink>
        </div>
    );
};

export default Navigation;