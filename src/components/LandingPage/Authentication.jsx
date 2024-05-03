import React, {  useEffect } from 'react';
import {auth, provider} from "./config"; 
import { signInWithPopup } from "firebase/auth";

const Authentication = ({ value, setValue }) => {

    const handleClick = () => {
        // google modal
        signInWithPopup(auth, provider).then((data) => {
            // get a signed in email
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email);
        });
    }

    useEffect(() => {
        setValue(localStorage.getItem("email"));
    });

    return (
        <div id="auth-body">
            <button onClick={handleClick} className="login-with-google-btn">Sign in with Google</button>
        </div>
    );
}

export default Authentication;
