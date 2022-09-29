import React from 'react';
import './../styles/Login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src="../logos/logo_Coni.svg" alt="logo" className="logo" />
                <form action="/" className="form">
                    
                    <label htmlFor="email" className="label">CORREO</label>
                    <input type="text" id="email" placeholder="name@example.com" className="input input-email" />
                    
                    <label htmlFor="password" className="label">CONTRASEÑA</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />
                    
                    <input type="submit" value="LOGUEARSE" className="primary-button login-button" />
                    <a href="/">OLVIDE MIS DATOS</a>
                </form>
            </div>
        </div>
    );
}

export default Login;