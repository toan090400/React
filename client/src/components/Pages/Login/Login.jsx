import './login.css'
import Header from '../../Layouts/Menu/Header.jsx'
import Footer from '../../Layouts/Menu/Footer.jsx'
import AuthContext from '../../../contexts/AuthContext'
import { useForm } from "react-hook-form";
import { useContext } from 'react';

const Login = () => {
    const context = useContext(AuthContext)
    const { register, handleSubmit,  formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        
        context.onLogin(data)
        reset();
    };
    return (  
        <>
            <Header />
            <div className="login__page">
                <h2>Login Page</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <label htmlFor="username">username</label>
                        <input type="text" id="username"
                            {...register("username",{
                                required: {
                                    value: true,
                                    message: "username không được trống"
                                },
                                minLength: {
                                    value: 3,
                                    message: "username tối thiểu có 3 ký tự"
                                },
                                maxLength: {
                                    value: 10,
                                    message: "username tối da 10 ký tự"
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
            </div>
            <Footer />
        </>
    );
}
 
export default Login;