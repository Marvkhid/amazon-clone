import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from "firebase/auth";  // Import the correct function

const Login = () => {
  const navigate = useNavigate();  // Use useNavigate instead of useHistory
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = (e) => {
    e.preventDefault();
    // Use signInWithEmailAndPassword correctly
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully signed in
        console.log(userCredential.user); // Optionally log the user info
        navigate('/');  // Navigate to home page
      })
      .catch((error) => {
        // Handle errors
        alert(error.message);
      });
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Optionally log the user info
      console.log('User created:', userCredential.user);
      navigate('/');  // Navigate to home page after successful registration
    } catch (error) {
      console.error('Error creating user:', error.message);
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" onClick={signin} className="login-signin-button">
            Sign In
          </button>
        </form>
        <p>
          By signing-in, you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login-register-button">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
