import './Comment.css';
import NegativeParticleListAsset from "../../Designs_and_Flow/basic_designs/ParticleListBulletPointYellow.png";
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const Comment = (props) => {
    const authCtx = useContext(AuthContext);
    return(
        <div className = "Comment">
            <div className = "UserInfo">
                <div className = "CommentImage">
                </div>
                <div className = "CommentName">
                    {props.comment.commentName}
                </div>
                <div className = "CommentTime">
                    {props.comment.Date}
                </div>
            </div>
            <div className = "CommentText">
                {props.comment.text}
            </div>
            {/*<div className = "UserScore">
                User Score: 12/100
            </div>*/}
        </div>
    );
}

export default Comment;