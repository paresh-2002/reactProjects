import React from 'react'
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit =(e) => {
        e.preventDefault();
        setUser(username,password)
    }
  return (
    <div className='flex flex-col w-1/2 items-center bg-transparent p-5 rounded-xl gap-2 m-auto my-3 shadow-2xl text-black'>
    <h2>Login</h2>
    <input 
        type="text" 
        placeholder='UserName' 
        className='border-0 bg-transparent shadow-2xl py-2 px-4 rounded-lg focus:border-0 focus:ring-0' 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
    />
    <input 
        type="password"  
        placeholder='Password' 
        className='border-0 bg-transparent shadow-2xl py-2 px-4 rounded-lg focus:border-0 focus:ring-0' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
    />
    <button 
        onClick={handleSubmit} 
        className='border-none mt-3 bg-black hover:bg-slate-800 text-white py-2 px-4 rounded-lg'
    >
        Submit
    </button>
</div>


  )
}

export default Login