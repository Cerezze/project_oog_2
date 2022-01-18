import "./CommentSection.css";
import Comment from "../Comment/Comment";
import CommentInputSection from "../CommentInputSection/CommentInputSection";
import useHttp from "../../usehttp/usehttp";
import { useState, useEffect, useCallback, useContext } from "react";
import AuthContext from "../../store/auth-context";

const CommentSection = (props) => {
    const {isLoading, error, sendRequest: postComments} = useHttp();
    const [comments, setComments] = useState([]);
    const authCtx = useContext(AuthContext);
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    let newdate = year + "/" + month + "/" + day;

    const enterCommentHandler = async (CommentText) =>{
        const createComment = (commentData) => {
            const generatedId = commentData.name;
            const createdComment = {id: generatedId, 
                text: CommentText, 
                commentName: authCtx.email,
                Date: newdate
                };

            setComments((prevComments) => 
                prevComments.concat(createdComment)
            );
            console.log("onclick", comments);
            props.refProp.current.scrollTop = props.refProp.current.scrollHeight;
            
            const data = comments.length;

            fetch(`https://ooglandish-default-rtdb.firebaseio.com/Reviews/${props.DetailReview.id}/commentNum.json`, {
                method: 'PUT', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(data => {
                console.log('Success:', data);
                })
                .catch((error) => {
                console.error('Error:', error);
            });
       };

        postComments(
            {
                url: `https://ooglandish-default-rtdb.firebaseio.com/Reviews/${props.DetailReview.id}/Comments.json`,
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: {
                        text: CommentText,
                        commentName: authCtx.email,
                        Date: newdate
                    }
            }, createComment);
    };

    console.log("onrender", comments);

    useEffect(()=>{
        const loadedReviews = [];

        for (const key in props.DetailReview.Comments) {
            const quoteObj = {
                id: key,
                ...props.DetailReview.Comments[key]
            };
        
            loadedReviews.push(quoteObj);
        }
        setComments(loadedReviews);
    }, []);

    return(
        <div className = "commentSection">
            <CommentInputSection onEnterComment = {enterCommentHandler}
                                DetailReview = {props.DetailReview}
                                refProp = {props.refProp}/>
            <div className = "CommentSpread">
                {comments.map(i => {
                    return <Comment comment = {i}
                                    key = {Math.random()}/>
                })}
            </div>
        </div>
    );
}

export default CommentSection;