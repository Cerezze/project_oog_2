import './LogInMain.css';
import Header from '../../FrontPage/Header/Header';
import {Link, useHistory} from 'react-router-dom';
import { useState, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { useEffect } from 'react/cjs/react.development';

const LogInMain = (props) =>{
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [getUsers, setGetUsers] = useState([]);

    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const enterEmailHandler = (event) =>{
        event.preventDefault();
        setValueEmail(event.target.value);
    };

    const enterPasswordHandler = (event) =>{
        event.preventDefault();
        setValuePassword(event.target.value);
    };
    
    const submitHandler = (event) =>{
        event.preventDefault();
        
        const enteredEmail = valueEmail;
        const enteredPassword = valuePassword;
        //add validation

        setIsLoading(true);

        let url;

        if(isLogin){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD1vtzfEeXSJca_CkivVCtzkSOm2BmEu0w';
            
        }else{
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD1vtzfEeXSJca_CkivVCtzkSOm2BmEu0w';
        }

        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res =>{
                setIsLoading(false);
                if(res.ok){
                    return res.json();
                }else {
                    return res.json().then(data =>{
                        //show a custom error modal
                        let errorMessage ='Authentication failed!';
                        
                        throw new Error(errorMessage);
                    });
                }
            }).then(data => {

                const expirationTime = new Date(new Date().getTime() + data.expiresIn * 1000);
                authCtx.login(data.idToken, expirationTime, data.email);
                history.replace('/');
            }).catch(err =>{
                alert(err.message);
            });
    }

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
      };

    return(
        <div className="MAINPAGE">
            <Header GoingUp = {props.GoingUp}
                    flag = {0}/>
            <section className = 'SignInPage'>
            <h1>{isLogin ? 'SIGNUP' : 'SIGNIN'}</h1>
                <form className = 'SignInBox'>
                    <div>
                        <div >
                            <label htmlFor = 'email'>Your Email</label>
                            <input className='infoInput' 
                                    type = 'email' 
                                    id = 'email' required 
                                    onChange = {enterEmailHandler}/>
                        </div>
                        <div >
                            <label htmlFor='password'>Your Password</label>
                            <input className='infoInput' 
                                    type='password' 
                                    id='password' required 
                                    onChange = {enterPasswordHandler}/>
                        </div>
                        <div>
                            {!isLoading && <button className='SubmitInfo'
                                    onClick = {submitHandler}>{isLogin ? 'Create Account': 'Login' }</button>}
                                    {/*Create Spinner and loading component*/isLoading && <p>Sending request</p>}
                            <button
                                type='button'
                                className = 'switchForm'
                                onClick={switchAuthModeHandler}
                            >
                                {isLogin ? 'Login with existing account' :  'Create new account'}
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default LogInMain;