import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth-context";
import classes from "./LoginPage.module.css";
import { useContext, useRef, useState } from "react";

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const authCtx=useContext(AuthContext);
    const navigate=useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredpassword = passwordInputRef.current.value;
        setIsLoading(true);
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBPw1kUEwJXHVuN-8V0VSXakWMvLqsqIAU';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredpassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            setIsLoading(false);
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errormessage = "Authentication Failed!";
                    throw new Error(errormessage);
                })
            }
        })
            .then((data) => {
                authCtx.login(data.idToken);
                navigate("/store");
            })
            .catch(error => {
                alert(error.message);
            })
    }
    return <section className={classes.auth}>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='email'>Your Email</label>
                <input type='email' id='email' required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='password'>Your Password</label>
                <input
                    type='password'
                    id='password'
                    required
                    ref={passwordInputRef}
                />
            </div>
            <div className={classes.actions}>
                {!isLoading && <button>Login</button>}
                {isLoading && <p>Sending request...</p>}
            </div>
        </form>
    </section>
}
export default LoginPage;