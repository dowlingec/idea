import React from 'react';
import NavBar from './NavBar';

function Container() {
    //ROUTER SWITCH GOES HERE
    //if (!user (( useState)) ) render the login and signup forms
    return(
        <div>
            <NavBar />
            <h3>OuterNavBar goes here (nested are NavBar and LoggedInNavBar)</h3>
        
        </div>
    )
}

export default Container;