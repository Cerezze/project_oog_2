import React from 'react';
import './Header.css';
import Search from '../Search/Search';
import SignIn from '../SignIn/SignIn';
import HeaderBackgroundImage from '../../Designs_and_Flow/basic_designs/header_background.png';
import Logo from '../../Designs_and_Flow/basic_designs/Logo.png';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Header = (props) =>{
    const [HeaderisVisible, setHeaderIsVisible] = useState(0);
    const [HeaderOnclick, SetHeaderOnClick] = useState(false);
    
    useEffect(() => {
        if(HeaderOnclick == true || props.refProp < 100){

            setHeaderIsVisible(0);
        }else{
            setHeaderIsVisible(-120);
        }
    }, [props.GoingUp, HeaderOnclick, props.refProp]);

    const headerOnClickHandler = () => {
        console.log("cicked");
        SetHeaderOnClick(prevState => !prevState);
    }

    return(
    <div className="HEADER"
    style = {{
        top: `${HeaderisVisible}px`
    }}>
        <div className="headerLeftPanel" onClick = {headerOnClickHandler}>
            <div className = "leftAlignHeader">
            </div>
            <div className = "Logo">
                <Link to = "/"><img src = {Logo}/></Link>
            </div>
            <div className = "HeaderText">
                    <strong>Software and Tech Reviews</strong>
            </div>
        </div>
        <div className="headerRightPanel">
            <SignIn/>
            {props.flag == 1 ? <Search reviews = {props.reviews}
                    term = {props.term}
                    results = {props.results}
                    Change = {props.Change}/> : null}
        </div>
    </div>
);
}

export default Header;