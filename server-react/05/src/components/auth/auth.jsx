import './auth.css'
import MainHeader from '../Layout/MainHeader';
import AuthContext from '../../context/auth-context'

import { useState, useContext } from 'react';

const Auth = () => {

    const context = useContext(AuthContext);
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        // console.log(username);
        // console.log(password);
        context.onLogin(username,password);
        setUsername('');
        setPassword('');
    }
    return (  
        <>
            <MainHeader />
            <h1>Login</h1>
            <form onSubmit={handlerSubmit}>
                <div>
                    <label htmlFor="name">Username</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={username}
                        onChange={usernameHandler}
                    />
                </div>
                <div>
                    <label htmlFor="number">Password</label>
                    <input 
                        type="text" 
                        id="number" 
                        value={password}
                        onChange={passwordHandler}
                    />
                </div>
                <button>Add</button>
            </form>

        </>
    );
}
 
export default Auth;