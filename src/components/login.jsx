import React, { useState } from 'react';
import './login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Giriş yapildi', { email, password });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Daxil ol</h2>
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Şifrə *</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group remember-me">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Məni xatırla</label>
        </div>
        <div className="form-group forgot-password">
          <a href="/reset-password">Şifrəni unutdun?</a>
        </div>
        <button type="submit" className="login-button">Daxil ol</button>
      </form>
    </div>
  );
};

export default Login;
