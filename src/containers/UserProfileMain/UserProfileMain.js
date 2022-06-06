import './UserProfileMain.css';
import Header from '../../FrontPage/Header/Header';
import {useState, useContext} from 'react';
import AuthContext from '../../store/auth-context';
import {useHistory} from 'react-router-dom'

//useRef to optimize
const UserProfileMain = (props) =>{
    const [inputActive, setInputActive] = useState(false);
    const [passwordVal, setPasswordVal] = useState('');

    const authCtx = useContext(AuthContext);
    const history = useHistory();

    //code reused in login main
    const EditUnlock = (i) => {
        setInputActive((prevState) => !prevState);
    };

    const changePassword = (event) => {
        event.preventDefault();
        setPasswordVal(event.target.value);
    }

    const submitChanges = () => {

        const enteredNewPassword = passwordVal
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD1vtzfEeXSJca_CkivVCtzkSOm2BmEu0w',
        {
            method: 'POST',
            body: JSON.stringify({
                idToken : authCtx.token,
                password : enteredNewPassword,
                returnSecureToken : false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            // assumption: always succeeds!

            //history.replace('/');
        });
    }

    return (
        <div>
            <Header GoingUp = {props.GoingUp}
                    flag = {0}/>
            <div className = "ProfileSection">
                <h1>USER PROFILE</h1>

                    <h3>Password</h3><h6 onClick = {() => EditUnlock(3)}>EDIT</h6>
                        {inputActive && <input type = 'password' 
                                                            minLength = '7' 
                                                            onChange = {changePassword}/>}
                {inputActive && <button className = 'submitChanges'
                        onClick = {submitChanges}>Make Changes </button>}
            </div>
        </div>
    );
}

export default UserProfileMain;