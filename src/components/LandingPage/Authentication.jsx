import React, {  useEffect } from 'react';
import {auth, provider} from "./config"; 
import { signInWithPopup } from "firebase/auth";

const Authentication = ({ value, setValue }) => {

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email);
        });
    }

    useEffect(() => {
        setValue(localStorage.getItem("email"));
    });

    return (
        <div>
            <button onClick={handleClick}>Sign in with Google</button>
        </div>
    );
}

export default Authentication;
