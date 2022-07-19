import './auth.css'
import MainHeader from '../Layout/MainHeader';
import AuthContext from '../../context/auth-context'

import { useContext } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";

const Auth = () => {

    const context = useContext(AuthContext);
  
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    

    const onSubmit = async (data) => {
        try {
            
            const postUser = await axios.post('http://localhost:5000/api/auth/login',data);
            const dataUser = await postUser.data.user;
            context.onLogin(dataUser);
            reset();
        } catch (error) {
            console.log(error)
        }
        
    }
    return (  
        <>
            <MainHeader />
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <label htmlFor="username">username</label>
                    <input type="text" id="username"
                        {...register("username",{
                            required: {
                                value: true,
                                message: "username không được trống"
                            },
                        })}
                    />
                    {errors.username && (<p>{errors.username.message}</p>)}
                </div>
                <div className="">
                    <label htmlFor="password">password</label>
                    <input type="text" id="password"
                        {...register("password",{
                            required: {
                                value: true,
                                message: "password không được trống"
                            },
                        })}
                    />
                    {errors.password && (<p>{errors.password.message}</p>)}
                </div>
                
                <button>Add</button>
        </form>

        </>
    );
}
 
export default Auth;