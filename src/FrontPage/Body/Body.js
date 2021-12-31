import React from 'react';
import './Body.css';
import TabBar from '../tabBar/tabBar';
import ReviewBody from '../reviewBody/reviewBody';
import openSortTab from '../../Designs_and_Flow/basic_designs/open_Sort_Tab.png';
import closeSortTab from '../../Designs_and_Flow/basic_designs/close_Sort_Tab.png';

import {useState, useEffect} from 'react';

//work with objects to change multiple properties in setVisible

const Body = (props) =>{
    const [isVisible, setIsVisible] = useState({
        size: -124,
        url: openSortTab
        });
    //console.log(props.reviews);

    if(props.loading){
        return <h3>LOADING...</h3>
    }

    /*let arr1 = [];

    for(let i = 0; i < props.results.length; i++){
        for(let j = 0; j < props.reviews.length; j++){
            if(props.results[i] === props.reviews[j].Title){
                arr1.push(props.reviews[j]);
            }
        }
    }*/

    const handleClickVis = event => {
        //console.log("clicked");
        if(isVisible.size == -10)
            setIsVisible({
                size: -124,
                url: openSortTab
            });
        else
            setIsVisible({
                size: -10,
                url: closeSortTab
            });
    };

    //console.log(props.reviews);

    return(
    <div className="Body">
        <div className = "flexBody">
            <div className="bodyLeftPanel">
                <div className = "sortPanel" 
                    style = {{
                        marginLeft: isVisible.size,
                        backgroundImage: `url(${isVisible.url})`
                    }}>
                    <h3 className = "sortBy">Sort By</h3>
                    <ul className = "sortByList">
                        <li onClick = {() => props.Sort(1)}>
                            Title
                        </li>
                        <li onClick = {() => props.Sort(2)}>
                            Time Posted
                        </li>
                        <li onClick = {() => props.Sort(3)}>
                            Popularity
                        </li>
                    </ul>
                    <div className = "clickDiv" 
                          onClick = {handleClickVis}>
                    </div>
                </div>
            </div>
            <div className="bodyMiddlePanel">
                <h1 className = "tabTitle">REVIEWS</h1>
                <div className = "reviewCont">
                    {/*arr1.length === 0 ?*/ props.reviews.map((i,index) =>{
                                    //console.log(i);
                                    return (
                                <ReviewBody key = {i.Title}
                                            idx = {index}
                                            id = {i.id}
                                            title = {i.Title} 
                                            commentNum = {i.commentNum} 
                                            URLimage = {i.Image}
                                            dateAndTime = {i.Date}/>
                                            
                            
                    )})/*: props.reviews.filter(word => {
                        return arr1.includes(word);
                    }).map((i,index) => {
                        return(
                                <ReviewBody key = {i.Title}
                                            idx = {index}
                                            id = {i.id}
                                            title = {i.Title} 
                                           commentNum = {i.commentNum} 
                                           URLimage = {i.Image}
                                           dateAndTime = {i.Date}/>
                        )})*/}
                </div>
            </div>
            <div className="bodyRightPanel">
            </div>
        </div>
        
        <div className = "bodyBottomPanel">

        </div>
    </div>
)};

export default Body;