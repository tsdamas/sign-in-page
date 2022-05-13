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
    const handleErrorMessages = (name) => 
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    ); 


    // JSX code for sign in form
    const renderForm = (
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <div className='user-input-container'>
            <label>Username</label>
            <input type='text' className='uname mb-5' required />
            {handleErrorMessages('uname')}
          </div>
          <div className='password-input-container'>
            <label>Password</label>
            <input type='password' className='pass mb-3' required/>
            {handleErrorMessages('pass')}
          </div>
          <div className='button-container'>
            <input type='submit' className='button'/>
          </div>
        </form>
      </div>
    )

  return (
    <div className="App">
      <header className='App-header'>
      </header>
      <div className='sign-in-form'>
        <div className='title'>Log in to your account</div>
        <h6>Not a member?  <a href='/'>Sign up</a></h6>
        {isSubmitted ? <div>User is sucessfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
