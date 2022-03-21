import React from 'react';
import './reviewBody.css';
import TabBar from "../tabBar/tabBar";
import Comments from '../../Designs_and_Flow/basic_designs/numberOfcomments.png';
import { Link } from 'react-router-dom';

const reviewBody = (props) =>{
    return (
    <Link to = {`/detail-review/${props.id}`}>
    <div className="reviewBody">
        <div className = "leftReviewPanel">
            <img className = "dynamicImage" src = {"https://" + props.URLimage} alt="IMAGE NOT HERE" />
        </div>
        <div className = "rightReviewPanel">
            <div className = "reviewStatus">
                <div className = "dateTime">
                    {props.dateAndTime}
                </div>
                <div className = "Icon">
                    <div className = "commentIcon" >
                        <img src = {Comments} height = {"40px"}/>
                    </div>
                    <div className = "numOfComments">
                        {props.commentNum}
                    </div>
                </div>
            </div>
            <TabBar title = {props.title}/>
        </div>
    </div>
    <div className = "reviewBodyMobile">
        <TabBar title = {props.title}/>
        <img className = "dynamicImage" src = {"https://" + props.URLimage} alt="IMAGE NOT HERE" />
        <div className = "reviewStatus">
                <div className = "dateTime">
                    {props.dateAndTime}
                </div>
                <div className = "Icon">
                    <div className = "commentIcon" >
                        <img src = {Comments} height = {"40px"}/>
                    </div>
                    <div className = "numOfComments">
                        {props.commentNum}
                    </div>
                </div>
            </div>
    </div>
    </Link>
)};

export default reviewBody;