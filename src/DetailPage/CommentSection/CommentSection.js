import "./CommentSection.css";
import Comment from "../Comment/Comment";
import CommentInputSection from "../CommentInputSection/CommentInputSection";
import useHttp from "../../usehttp/usehttp";
import { useState, useEffect, useCallback, useContext } from "react";
import AuthContext from "../../store/auth-context";

const CommentSection = (props) => {
    const [loadedComments, setLoadedComments] = useState([]);
    const authCtx = useContext(AuthContext);
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    let newdate = year + "/" + month + "/" + day;

    const onEnterCommentHandler = async (CommentText) =>{
        fetch(`https://ooglandish-default-rtdb.firebaseio.com/Comments/${props.DetailReview.id}/Comments.json`, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                                text: CommentText, 
                                commentName: authCtx.email,
                                Date: newdate})
        })
        .then(response => response.json())
        .then(data => {
            const generatedId = data.name;
            const createdComment = {id: generatedId, 
                text: CommentText, 
                commentName: authCtx.email,     
                Date: newdate
                };

            setLoadedComments((prevComments) => 
                prevComments.concat(createdComment)
            );
            props.refProp.current.scrollTop = props.refProp.current.scrollHeight;
            //Check to see if the CORRECT ELEMENTS ARE BEING incremented,
            //also test to see if the state is  being incremented and if it will sort eventually
            const data1 = loadedComments.length + 1;

            const LoadedReviews = [];
            for (const key in props.loadedReviews) {
              const quoteObj = {
                id: key,
                ...props.loadedReviews[key]
              };
          
              LoadedReviews.push(quoteObj);
            }

            let arrob = LoadedReviews;
            //console.log("COMMENTSECTION loadedreviews: ", props.loadedReviews);
            //console.log("CHANGEDARROB0",arrob[props.reviewIdx].commentNum);
            arrob[props.reviewIdx].commentNum = arrob[props.reviewIdx].commentNum + 1;
            //console.log("CHANGEDARROB1", arrob[props.reviewIdx].commentNum);
            let changedArrob = arrob;

            props.setLoadedReviews(prevReviews => {
                //console.log("CHANGEDARROB2",changedArrob);
                return [...changedArrob]
            });

            fetch(`https://ooglandish-default-rtdb.firebaseio.com/Reviews/${props.DetailReview.id}/commentNum.json`, {
                method: 'PUT', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data1),
                })
                .then(response => response.json())
                .then(data => {
                console.log('Success in coimmentNum:', data);
                })
                .catch((error) => {
                console.error('Error:', error);
            });
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    };

    useEffect(()=>{
        fetch(`https://ooglandish-default-rtdb.firebaseio.com/Comments/${props.DetailReview.id}/Comments.json`)
        .then(response => response.json())
        .then(data => {
          const comments = [];
          for (const key in data) {
            const quoteObj = {
              id: key,
              ...data[key]
            };
        
            comments.push(quoteObj);
          }
  
        setLoadedComments(comments);
        });
    }, []);

    return(
        <div className = "commentSection">
            <CommentInputSection onEnterComment = {onEnterCommentHandler}
                                DetailReview = {props.DetailReview}
                                refProp = {props.refProp}/>
            <div className = "CommentSpread">
                {loadedComments.map(i => {
                    return <Comment comment = {i}
                                    key = {Math.random()}/>
                })}
            </div>
        </div>
    );
}

export default CommentSection;