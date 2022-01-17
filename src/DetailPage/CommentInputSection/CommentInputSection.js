import './CommentInputSection.css';
import CommentSectionDividerAsset from "../../Designs_and_Flow/basic_designs/CommentSectionTitleDivider.png";
import {useState, useRef, useContext} from 'react';
import AuthContext from '../../store/auth-context';

const CommentInputSection = (props) => {
    const [value, setValue] = useState('');
    const authCtx = useContext(AuthContext);

    const enterCommentHandler = (event) =>{
        event.preventDefault();

        setValue(event.target.value);
    };

    const submitHandler = (e) =>{
        if(authCtx.isLoggedIn == true){
        props.onEnterComment(value);

        setValue('');
        }else{
            alert('Not Logged In!');
        }
    }

    return(
        <div className = "CommentInputSection">
            <div className = "CommentSectionTitle">
                <h1 className = "CommentSectionText">Comments</h1>
                <img className = "CommentSectionDivider" src = {CommentSectionDividerAsset}/>
            </div>
            <div className = "CommentBox">
                <textarea 
                        className = "CommentBoxInput" 
                        placeholder={'Write Comment Here'}
                        value = {value}
                        onChange = {enterCommentHandler}></textarea>
            </div>
            <div className = "SubmitArea">
                <button 
                        className = "SubmitButton"
                        onClick = {submitHandler}
                        disabled = {value == ''}
                    >Submit</button>
            </div>
        </div>
    );
}

export default CommentInputSection;