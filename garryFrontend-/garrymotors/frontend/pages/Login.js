import React, { useState } from 'react';
import styles from "../styles/adminlogin.module.css";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const credentials = [
        { email: 'garrymotors72@gmail.com', password: 'aditya@garrymotors' }
    
    ];

    const handleLogin = (e) => {
        e.preventDefault();
        const isValidUser = credentials.some(
            credential => email === credential.email && password === credential.password
        );

        if (isValidUser) {
            localStorage.setItem('token', 'authenticated');
            router.push('/Homeadmin');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <form onSubmit={handleLogin}>
                    <h1 className={styles.h1}>Garrymotors.com</h1>
                    <div className={styles.inputbox}>
                        <input className={styles.input} type="email" placeholder='email' required onChange={(e) => setEmail(e.target.value)} />
                        <MdEmail className={styles.icon} />
                    </div>
                    <div className={styles.inputbox}>
                        <input className={styles.input} type="password" placeholder='password' required onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className={styles.icon} />
                    </div>
                    <button type='submit' className={styles.btn}>Login</button>
                    {error && <p className={styles.error}>{error}</p>}
                </form>
            </div>
        </div>
    );
};

export  default Login;
