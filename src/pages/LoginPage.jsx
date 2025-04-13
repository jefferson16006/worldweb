import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import userLogo from '../assets/user.svg'
import SmallSpinner from '../components/SmallSpinner';

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadSpinner, setLoadSpinner] = useState(false);

  const loginData = {
    email,
    password
  }

  const handleLoginSubmit = async(e) => {
    e.preventDefault();
    setLoadSpinner(true)
    try {
        const res = await fetch('https://worldweb-api.onrender.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        const data = await res.json()
        if(!res.ok) {
            // console.log(data.error || 'Login failed')
            document.getElementById('error').textContent = data.error
            return
        }
        // console.log('Login successful: ', data)
        localStorage.setItem('user', data.user.username)
        navigate('/home')
    } catch (error) {
        // console.log(error)
        document.getElementById('error').textContent = error
    } finally {
      setLoadSpinner(false)
    }
  }
  return (
    <div className='flex justify-center items-center'>
    <div className='flex flex-col justify-center items-center py-15'>
        <h1 className='text-4xl text-center font-medium mb-7'>Login to your account</h1>
        <img src={userLogo} alt='User' width={70} height={70}/>
        <p className='text-red-500 text-center mt-6 text-center' id='error'></p>
        <form className='flex flex-col justify-center mt-6' onSubmit={handleLoginSubmit}>
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
                className='mb-2 p-3 w-80 rounded-lg bg-[#323232] focus:outline-none'
            />
            <Link to='#' className='text-blue-400 text-left hover:text-blue-300 mb-9'>Forgot password?</Link>
            <button className='flex justify-center items-center mb-7 px-4 py-2 bg-violet-700 rounded-lg w-80 text-[19px] hover:bg-violet-500 cursor-pointer text-center'
            >
              {loadSpinner && <SmallSpinner/>}
              Login
            </button>
      </form>
    </div></div>
  )
}

export default LoginPage