import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './formbox.css';
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {

    const[values,setValues] = useState({
        name : '',
        email : '',
        password : ''
    })

    const navigate = useNavigate();

    const[error,setError] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({...prev,[event.target.name] : [event.target.value]}))
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        setError(Validation(values));
        if(error.name ==="" && error.email ==="" && error.password ===""){
          axios.post('http://localhost:8081/signup', values)
          .then(res => {
            navigate('/');
          })
          .catch(err => console.log(err));
        }
    }

  return (
    <div className='b'>
      <div className='a'>
        <div>
          <h3>Sign Up</h3>
        </div>
        <form action='' onSubmit={handleSubmit}>
            <div>
            <div>Name</div>
            <input className='in' type='name' placeholder='Enter Name' 
            name='name' onChange={handleInput} />
            {error.name && <span className='text-danger'>{error.name}</span>}
            </div>
            <div>
            <div>Email</div>
            <input className='in' type='email' placeholder='Enter Email' 
            name='email' onChange={handleInput} />
            {error.email && <span className='text-danger'>{error.email}</span>}
            </div>
            <div>
            <div>Password</div>
            <input className='in' type='password' placeholder='Enter Password' 
            name='password' onChange={handleInput}/>
            {error.password && <span className='text-danger'>{error.password}</span>}
            </div>
            <button type='submit' className='btn btn-success'>Sign up</button>
            <div className='e'>
            <input className='d' type='checkbox' />
            <span className='f'>You agree to our terms and conditions.</span>
            </div>
            <Link to='/' className='btn btn-default border bg-light text-decoration-none'>
            Log in
            </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
