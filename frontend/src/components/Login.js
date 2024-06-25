import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './formbox.css';
import validation from './LoginValidation';

function Login() {

    const[values,setValues] = useState({
        email : '',
        password : ''
    })

    const[error,setError] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        setError(validation(values));
    }

  return (
    <div className='b'>
      <div className='a'>
        <div>
          <h3>Sign In</h3>
        </div>
        <form action='' onSubmit={handleSubmit}>
            <div>
            <div>Email</div>
            <input className='in' type='email' placeholder='Enter Email' name='email'
            onChange={handleInput} />
            {error.email && <span className='text-danger'>{error.email}</span>}
            </div>
            <div>
            <div>Password</div>
            <input className='in' type='password' placeholder='Enter Password' 
            onChange={handleInput} name='password'/>
            {error.password && <span className='text-danger'>{error.password}</span>}
            </div>
            <button className='btn btn-success' type='submit'>Log in</button>
            <div className='e'>
            <input className='d' type='checkbox' />
            <span className='f'>You agree to our terms and conditions.</span>
            </div>
            <Link to='/signup' className='btn btn-default border bg-light text-decoration-none'>
            Create Account
            </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
