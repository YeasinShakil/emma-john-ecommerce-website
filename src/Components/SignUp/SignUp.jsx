import React from 'react';
import './signUp.css'
import { Link, useNavigate } from 'react-router-dom';
import './signUp.css'
import { useState } from 'react';

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');
    const naviget = useNavigate();

    const [
        createUserWithEmailAndPassword, user
      ] = useCreateUserWithEmailAndPassword(auth);

      

    const emailBlur = event => {
        setEmail(event.target.value)
    }
    const passwordBlur = event => {
        setPassword(event.target.value)
    }
    const confirmPassBlur = event => {
        setConfirmPass(event.target.value)
    }

    if(user) {
        naviget('/')
    };
    
    const handleCreateUser = (event) => {
        event.preventDefault();
        if(password !== confirmPass) {
            setError('Your Password did not match')
            return
        }
        if(password.length < 6) {
            setError('Password must be over 6 character')
            return
        }
        createUserWithEmailAndPassword(email, password)
    }

  
    return (
        <div className='form-container signUp-fromContainer'>
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleCreateUser}>
                <div className='input-group'>
                
                <label htmlFor="email">Email</label>
                <input onBlur={emailBlur}  type="email" name="email" id="" required />
                </div>
                <div className='input-group'>
                <label htmlFor="password">Password</label>
                <input  onBlur={passwordBlur} type="password" name="password" id="" required />
                </div>
                <p className='error_message'>
                    {error}
                </p>
                <div className='input-group'>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input onBlur={confirmPassBlur} type="password" name="confirm-password" id="" required />
                </div>
                {/* <button type="submit">Sign Up</button> */}
                <input className='submit_button' type="submit" value="Sign Up" />
            </form>
            <p >Already Have an Account? <Link to={'/login'}>Login now</Link></p>
            <div className="line">
                <div className="line1"></div>
                <p>Or</p>
                <div className="line1"></div>
            </div>
            <div className="googleLogin">
                <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                <p>Continue with Google</p>
            </div>
        </div>
    );
};

export default SignUp;