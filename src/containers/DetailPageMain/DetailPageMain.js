import './DetailPageMain.css';
import {useParams, useHistory, useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Header from '../../FrontPage/Header/Header';
import ReviewBodyDetailPage from '../../DetailPage/ReviewBodyDetailPage/ReviewBodyDetailPage.js';
import CommentSection from '../../DetailPage/CommentSection/CommentSection';

const DetailPage = (props) => {
    const params = useParams();
    const location = useLocation();
    
    const review = props.loadedReviews.find((review) => review.id === params.reviewData);
    if(!review){
        return <p>No Review Found!!</p>
    }
    
    return(
        <div className = "MAINPAGE">

            <Header GoingUp = {props.GoingUp}
                    flag = {0}
                    refProp = {props.refProp2}/>
            <ReviewBodyDetailPage DetailReview = {review}/>
            <CommentSection onAddReview = {props.onAddReview}
                            DetailReview = {review}
                            setLoadedReviews = {props.setLoadedReviews}
                            loadedReviews = {props.loadedReviews}
                            refProp = {props.refProp}
                            reviewIdx = {params.reviewIdx}/>
            
        </div>
    );
}


export default DetailPage;