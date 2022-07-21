import axios from "axios";
import { useForm } from "react-hook-form";

import MainHeader from '../Layout/MainHeader';

const Register = () => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const password = watch('password');

    const onSubmit = async (data) => {
        try {
            const register = await {
                username:data.username,
                password:data.password,
            };
            await axios.post('http://localhost:5000/api/users',register);
            reset();
        } catch (error) {
            console.log(error)
        }
        reset();
    };

    return (  
        <>
            <MainHeader />
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
                
                <div className="">
                    <label htmlFor="passwordConfirm">passwordConfirm</label>
                    <input type="text" id="passwordConfirm"
                        {...register("passwordConfirm",{
                            validate: (value) => value === password || "password không khớp"
                        })}
                    />
                    {errors.passwordConfirm && (<p>{errors.passwordConfirm.message}</p>)}
                </div>
                <button>Add</button>
            </form>
        </>
    );
}
 
export default Register;