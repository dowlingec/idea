import React from 'react';
import NavBar from './NavBar';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

function Container() {
    //ROUTER SWITCH GOES HERE
    //if (!user (( useState)) ) render the login and signup forms
    return(
        <div>
            <NavBar />
            <h3>OuterNavBar goes here (nested are NavBar and LoggedInNavBar)</h3>
            <SignupForm />
            <LoginForm />
        </div>
    )
}

export default Container;