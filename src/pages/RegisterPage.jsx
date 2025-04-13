import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogo from '../assets/google_logo.svg';
import SmallSpinner from '../components/SmallSpinner';

const RegisterPage = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadSpinner, setLoadSpinner] = useState(false)

  const formData = {
    username,
    email,
    password
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    setLoadSpinner(true)
    try {
      const res = await fetch('https://worldweb-api.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (!res.ok) {
        document.getElementById('error').textContent = data.error
        return;
      }
      localStorage.setItem('user', data.user.username)
      navigate('/home')
    } catch (error) {
      document.getElementById(error).textContent = data.error
    } finally {
      setLoadSpinner(false)
    }
  }
  return (
    <div className='flex flex-col justify-center items-center py-15'>
      <h1 className='text-5xl text-center font-medium mb-6'>Create an account</h1>
      <p className='text-red-500 text-center mb-6 text-center' id='error'></p>
      <form className='flex flex-col justify-center' onSubmit={handleFormSubmit}>
        <input 
          type='text' 
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='form-input'
        />
        <input 
          type='email' 
          placeholder='Email Address' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='form-input'
        />
        <input 
          type='password' 
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className='form-input'
        />
        <button className='flex justify-center items-center mb-7 px-4 py-2 bg-violet-700 rounded-lg w-80 text-[19px] hover:bg-violet-500 cursor-pointer text-center'
        >
          {loadSpinner && <SmallSpinner />}
          Register
        </button>
      </form>
      <p className='text-in-line'><span className='text-span'>or</span></p>
      <Link to='#' className='mt-7 mb-5 px-4 py-2 bg-white text-black rounded-lg w-80 text-[19px] hover:bg-violet-700 hover:text-white cursor-pointer text-center'>
        <img src={GoogleLogo} alt='google_logo' width={23} height={23} className='inline text-center mr-3'/>
        Continue with Google
      </Link>
      <p>Already have an accont? <Link to='/auth/login' className='text-violet-500'>Log in</Link></p>
    </div>
  )
}

export default RegisterPage