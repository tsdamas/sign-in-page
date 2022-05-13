import { useState } from 'react/cjs/react.production.min';
import './App.css';

function App() {

    //store an object error maessage 
    const [errorMessages, setErrorMessages] = useState({});
    //state indicates if the value is submitted or not
    const [isSubmitted, setIsSubmitted] = useState(false); 

    //generate JSX code for error message
    const handleErrorMessages = (name) => 
    name === errorMessages.name && (
      <div className="error"> {errorMessages.message}</div>
    ); 

    // JSX code for sign in form
    const renderForm = (
      <div className='form'>
        <form>
          <div className='user-input-container'>
            <label>Username</label>
            <input type='text' name='uname' required />
            {handleErrorMessages("uname")}
          </div>
          <div className='password-input-container'>
            <input type='password' name='class' required/>
            {handleErrorMessages("pass")}
          </div>
          <div className='button-container'>
            <input type='submit'/>
          </div>
        </form>
      </div>
    )

  return (
    <div className="App">
      <header className='App-header'>
      </header>
      <div className='sign-in-form'>
        <div className='title'>Sign in to your account</div>
        {isSubmitted ? <div>User is sucessfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
