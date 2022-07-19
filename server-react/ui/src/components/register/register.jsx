import { useState } from 'react';
import axios from "axios";
import MainHeader from '../Layout/MainHeader';
const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

    const handlerSubmit = (e) => {
        
        // console.log(username,password);
        // context.onLogin(username,password);
        e.preventDefault();
        const register = {
            username: username,
            password: password,
        };
        axios.post('http://localhost:5000/api/users',register);
        
        setUsername('');
        setPassword('');
    }
    return (  
        <>
            <MainHeader />
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
 
export default Register;