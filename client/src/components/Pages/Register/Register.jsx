import Header from '../../Layouts/Menu/Header.jsx'
import Footer from '../../Layouts/Menu/Footer.jsx'
import './register.css'

import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const password = watch('password');
    const onSubmit = async (data) => {
        try {
            await axios.post('http://localhost:5000/api/users',data);
            reset();
        } catch (error) {
            console.log(error)
        }
        reset();
    };
    
    return (  
        <>
            <Header />
            <div className="register__page">
                <h2>Register Page</h2>
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
                    
                    

                    <div className="">
                        {/* nếu ở đây không bắt lỗi thì trong da ta mặc định là false ở đây chỉ test thử */}
                        <h3>isAdmin:</h3>
                            <input type="radio" id="true" value="true"
                                {...register("isAdmin",{
                                    required: {
                                        value: true,
                                        message: "isAdmin không được trống"
                                    },
                                })}
                            />
                            <label htmlFor="true">true</label><br/>
                            <input type="radio" id="false" value="false"
                                {...register("isAdmin",{
                                    required: {
                                        value: true,
                                        message: "isAdmin không được trống"
                                    },
                                })}
                            />
                            <label htmlFor="false">false</label><br/>
                            {errors.isAdmin && (<p>{errors.isAdmin.message}</p>)}
                    </div>

                    {/* <div className="">
                        <label htmlFor="email">email</label>
                        <input type="text" id="email"
                            {...register("email",{
                                required: {
                                    value: true,
                                    message: "email không được trống"
                                },
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{1,4}$/g,
                                    message: "email không hợp lệ"
                                },
                            })}
                        />
                        {errors.email && (<p>{errors.email.message}</p>)}
                    </div>
                    <div className="">
                        <label htmlFor="phone">phone</label>
                        <input type="text" id="phone"
                            {...register("phone",{
                                required: {
                                    value: true,
                                    message: "phone không được trống"
                                },
                                pattern: {
                                    value: /^[0-9\-\+]{9,15}$/g,
                                    message: "phone không hợp lệ"
                                },
                            })}
                        />
                        {errors.phone && (<p>{errors.phone.message}</p>)}
                    </div> */}

                    <button>Add</button>
                </form>
            </div>
            <Footer />
        </>
    );
}
 
export default Register;