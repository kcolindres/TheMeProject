import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();
    const [errorMessage, setErrorMessage] = React.useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('')
      try {
        await signIn(email, password)
        navigate('/account') // this goes to the homepage
      } catch (e) {
        setError(e.message)
        setErrorMessage("Invalid login input or not registered yet!")
        console.log(e.message)
        alert("ERROR")
      }
    };
  return (
    <div className="bg-gradient-to-b from-sky-300 to-sky-500 w-full
    text-white h-screen">
    <div className='max-w-[700px] mx-auto p-4'>   
      <div>
        <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
        <p className='pt-56'>
          Don't have an account yet?{' '}
          <Link to='/signup' className='underline'>
            Register.
          </Link>
          {errorMessage && <div className="error"> {errorMessage} </div>} {/* This needs to be styled so that its red */}
        </p>
        </div>
       
        <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} className='border p-3 text-black' type='email' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className='border p-3 text-black' type='password' />
        </div>
        <button className='mx-auto text-center bg-sky-500 w-36 shadow-md shadow-sky-600 mt-4 h-10 text-lg rounded-md'>
          Sign In
        </button>
      </form>
    </div>
    </div>
  )
}


export default Signin