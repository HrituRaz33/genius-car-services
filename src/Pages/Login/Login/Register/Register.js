import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value
    }
    return (
        <div className='register-form'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="name" name='name' id='' placeholder='Your Name' />
                <br />
                <input type="email" name='email' id='' placeholder='Your gmail' required />
                <br />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input type="submit" value='Register' />
            </form>
            <p>Already Have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;