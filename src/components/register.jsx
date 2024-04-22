import React , {useState}from 'react'
import "./register.css";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(email, password);
    };
  
    return (
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Qeydiyyat</h2>
          <div className="input-group">
            <label>Email *</label>
            <input  type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="input-group">
            <label>Şifrə *</label>
            <input id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required/>
          </div>
          <button type="submit" className='submit-button'>Qeydiyyat</button>
        </form>
      </div>
    );
  };

export default Register