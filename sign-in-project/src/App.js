import React, { useState } from 'react';
import './App.css';

function App() {

    //store an object error maessage 
    const [errorMessages, setErrorMessages] = useState({});
    //state indicates if the value is submitted or not
    const [isSubmitted, setIsSubmitted] = useState(false); 

    //user login info object 
    const database = [
      {
        username:'user1',
        password:'pass1'
      },
      {
        username:'user2',
        password:'pass2'
      },
      {
        username:'user3',
        password:'pass3'
      }
    ];

    const errors = {
      uname:'invalid username',
      pass: 'invalid password'
    };

    const handleSubmit = (e) => {
      e.preventDefault(); 

      var {uname, pass} = document.forms[0];

      //Find user data
      const userData = database.find((user) => user.username === uname.value); 

      //Compare user info with input value
      if (userData) {
        if (userData.password !== pass.value) {
          //incorrect password 
          setErrorMessages({name:'pass', message: errors.pass});
        } else {
          setIsSubmitted(true);
        } 
      } else {
        //incorrect usernamme
          setErrorMessages({name:'uname', message: errors.uname}); 
        }
    }


    //generate JSX code for error message
    const handleErrorMessage = (name) => name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    ); 


    // JSX code for sign in form
    const renderForm = (
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <div className='user-input-container'>
            <label>Username</label>
            <input type='text' name='uname' className='uname' required />
            {handleErrorMessage('uname')}
          </div>
          <div className='password-input-container'>
            <label>Password</label>
            <input type='password' name='pass' className='pass' required/>
            {handleErrorMessage('pass')}
          </div>
          <div className='button-container'>
            <input type='submit' className='button'/>
          </div>
        </form>
      </div>
    )

  return (
    <div className='App'>
      <header className='App-header'>
      </header>
      <div className='app-bg container-fluid' style={{"--img": "url('https://images.unsplash.com/photo-1595287998909-745f8f4b2dff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"}} >
      <div className='nav'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>C<div className='tringle'></div>mping Match<span className='nav-dot'>.</span></a>
          <a className='navbar-home hidden-sm' href='/'>Home</a>
          <a className='navbar-join hidden-sm' href='/'>Sign up</a>
        </div>
      </div>
      <div className='sign-in-form'>
        <div className='title'>Welcome back<span className='dot'>!</span></div>
        <h6>Sign in to your account to continue.</h6>
        {isSubmitted ? <h2>User is sucessfully logged in<span className='dot'>.</span></h2> : renderForm}
      </div>
      </div>
      </div>
  );
}

export default App;
