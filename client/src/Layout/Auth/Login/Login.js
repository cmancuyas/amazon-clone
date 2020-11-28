import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import auth from './src/firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt='amazonlogo'
        />
      </Link>

      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setpassword(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='text'
            value={password}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type='submit' className='login__button' onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy notice, our Cookies Notice and our Interest-Based Ads
          Notice
        </p>

        <button
          type='submit'
          onClick={register}
          className='login__registerButton'
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
