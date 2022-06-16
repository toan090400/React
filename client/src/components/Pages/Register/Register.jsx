import Header from '../../Layouts/Menu/Header.jsx'
import Footer from '../../Layouts/Menu/Footer.jsx'
import './register.css'

const Register = () => {
    return (  
        <>
            <Header />
            <div className="register__page">
                <h2>Register Page</h2>
                <div className="">
                    <label htmlFor="username">username</label>
                    <input type="text" id="username"/>
                    <p>error</p>
                </div>
                <div className="">
                    <label htmlFor="password">password</label>
                    <input type="text" id="password"/>
                    <p>error</p>
                </div>
                
                <div className="">
                    <label htmlFor="passwordConfirm">passwordConfirm</label>
                    <input type="text" id="passwordConfirm"/>
                    <p>error</p>
                </div>
                
                

                <div className="">
                    <h3>isAdmin:</h3>
                        <input type="radio" id="true" name="isAdmin" value="true"/>
                        <label for="true">true</label><br/>
                        <input type="radio" id="false" name="isAdmin" value="false"/>
                        <label for="false">false</label><br/>
                    <p>error</p>
                </div>

                <button>Add</button>
            </div>
            <Footer />
        </>
    );
}
 
export default Register;