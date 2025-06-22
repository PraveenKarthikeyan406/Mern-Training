import React,{useState} from 'react';
import './Login.css';
import { Navigate,useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) =>{
    setUsername(event.target.value);
  }

     const handleLogin = (e) => {
    e.preventDefault();
    // Simple login condition (replace with real auth logic)
    if (username === 'admin') {
      // Navigate to dashboard
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div >
    <div className='Login-header'>
      <h3 >Username</h3>
      <input type='text' placeholder='Enter name' className='centerinput' onChange={handleUsernameChange}/>
      
      <button className='button' onSubmit={handleLogin} >Submit</button>
      </div>
      
    
    </div>
  );
}

export default Login;
