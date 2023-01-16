import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import './Login.css';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(event) {
      event.preventDefault()
  
      const response = await fetch('http://localhost:3001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
  
      const data = await response.json()
  
      if (data._id) {
        alert('Login successful')
        window.location.href = '/dashboard'
      } else {
        alert('Please check your username and password')
      }
    }
    

   return (
      <form onSubmit={loginUser}>
          <div className="container">
            <div className="box-1">
                <div className="content-holder">
                    <h2>Hello!</h2>
                  
                    <Link to={'/register'}><button className="button-1">Sign up</button></Link>
                </div>
            </div>

            <div className="box-2">
                <div className="login-form-container">
                    <h1>Login Form</h1>
                    <input name='email' type="email" className="input-field" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br></br>
                    <input name='password' type="password" className="input-field" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br></br>
                    <button className="login-button">Login</button>
                </div>
            </div>
        </div>
      </form>    
    )
}
export default Login;