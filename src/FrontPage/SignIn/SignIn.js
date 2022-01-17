import React, {useContext} from 'react';
import './SignIn.css';
import Accountlog from '../../Designs_and_Flow/basic_designs/account.png'
import {Link} from 'react-router-dom';

import AuthContext from '../../store/auth-context';

const SignIn = (props) =>{
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () => {
            authCtx.logout();
    }

    return(
    <div className="signIn">
        <div className = "leftAlign">
        </div>
        <div className = "signInCont">
                {isLoggedIn && (<span><Link to = '/profile'><img className = "accLog" src = {Accountlog}  height = {"50px"}/></Link>
                    <span className = "signInText"
                            onClick = {logoutHandler}>Log Out</span>
                </span>)}
            
                {!isLoggedIn && (
                    <span className = "signInText">
                    <Link to = '/auth'>
                        <strong>Sign in</strong>
                    </Link>
                </span>
                )}
        </div>
    </div>
)};

export default SignIn;