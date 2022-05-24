import React from 'react';
import './reviewBody.css';
import TabBar from "../tabBar/tabBar";
import Comments from '../../Designs_and_Flow/basic_designs/numberOfcomments.png';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

const ReviewBody = (props) =>{
    const [CommentNum, setCommentNum] = useState(props.commentNum);

    useEffect(()=>{
        fetch(`https://ooglandish-default-rtdb.firebaseio.com/Reviews/${props.id}/commentNum.json`)
        .then(response => response.json())
        .then(data => {
        setCommentNum(data);
        });
    }, []);

    // useEffect(()=>{
    //         fetch(`https://ooglandish-default-rtdb.firebaseio.com/Comments/${props.id}.json`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log("inFectch Objects",data);
    //             const comments = [];
    //             for (const key in data) {
    //                 const quoteObj = {
    //                 id: key,
    //                 ...data[key]
    //                 };
                
    //                 comments.push(quoteObj);
                    
    //             }
    //             console.log("inFectch Objects",data);
    //             if(data !== null)
    //                 setCommentNum(comments.length + 1);
    //         });
    //     }, []);

    return (
    <Link to = {`/detail-review/${props.id}/${props.idx}`}>
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
                        {CommentNum}
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
                        {CommentNum}
                    </div>
                </div>
            </div>
    </div>
    </Link>
)};

export default ReviewBody;