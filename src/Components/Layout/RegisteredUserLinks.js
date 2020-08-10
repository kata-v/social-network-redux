import React from 'react';
import LogIn from '../Auth/LogIn';
import LogOut from '../Auth/LogOut';

const RegisteredUserLinks = () => {
    return (
        <div>
            <p>Are you looking to Log in or Log out?</p>
            <LogIn/>
            <LogOut/>
        </div>
    );
}

export default RegisteredUserLinks;
