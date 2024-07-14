import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css'; 

const Main= () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        
    };

    return (
        <div className='login-form'>
            <h2>Username OR Email</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                {/* <label>
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    Remember Me
                </label> */}
                <button>
                <Link to="/forgot-password">Forgot Password</Link>
            </button>
                <button type="submit">Log In</button>
            
            
            {/* <button>
                <Link to="/join-us">Create your account</Link>
            </button> */}
            </form>
        </div>
    );
};

export default Main;