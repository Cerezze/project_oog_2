import React from 'react';
import './tabBar.css';
const tabBar = (props) =>(
    <div className="tabBar">
        <div className="title">{props.title}</div>
    </div>
);

export default tabBar;