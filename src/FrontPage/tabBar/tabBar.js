import React from 'react';
import './tabBar.css';
// We can use tabbar just like we wanted to before and we will dynamically
// insert text on the front page in the following  locations:
// Sign in text, Logo text, tab Text (Reviews, titles etc...)
// tab bar will be THE component of text only stuff.
const tabBar = (props) =>(
    <div className="tabBar">
        <div className="title">{props.title}</div>
    </div>
);

export default tabBar;