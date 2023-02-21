import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase';
import './login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const naviget = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
       
    }

    if (user) {
        naviget(from, {replace: true})
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSignIn}>
                <div className='input-group'>

                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" required />
                </div>
                
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" required />
                </div>
                
                <input className='submit_button' type="submit" value="Sign In" />
            </form>
            <p >New to Ema-John? <Link to={'/signUp'}>Create a new account here.</Link></p>
            <div className="line">
                <div className="line1"></div>
                <p>Or</p>
                <div className="line1"></div>
            </div>
            <div className="googleLogin" onClick={signInWithGoogle}>
                <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                <p>Continue with Google</p>
            </div>
        </div>
    );
};

export default Login;