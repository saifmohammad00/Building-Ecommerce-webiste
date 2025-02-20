import React, { useEffect, useState } from "react";
const AuthContext = React.createContext({
    token: "",
    email:"",
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
});
export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem("token");
    const initialEmail=localStorage.getItem("email");
    const [token, setToken] = useState(initialToken);
    const [email,setEmail]=useState(initialEmail);
    const userIsLoggenIn = !!token;

    useEffect(() => {
        if (token) {
            const clearTokenAfterTimeout = () => {
                localStorage.removeItem("token");

                alert("Your session has expired. Please log in again.");
            };
            const timeout = setTimeout(clearTokenAfterTimeout, 5 * 60 * 1000);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [token]);

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem("token", token);
    }
    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem("token");
    }
    const contextValue = {
        token: token,
        email:email,
        isLoggedIn: userIsLoggenIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext;