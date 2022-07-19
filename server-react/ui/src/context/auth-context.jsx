import './auth-context.css'
import React,{ useState,useEffect } from 'react';
import { useNavigate  } from "react-router-dom";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: () => {}
    // onLogin: (data) => {}
});

export const AuthContextProvider = (props) => {

    let navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation) {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (data) => {
        const login = data._id;
        localStorage.setItem('isLoggedIn', login);
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        navigate("/", { replace: true });
    };
    return (  
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthContext;