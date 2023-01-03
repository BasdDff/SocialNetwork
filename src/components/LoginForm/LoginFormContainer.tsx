import React from 'react';
import {useActions} from "../../hooks/useRedux";
import LoginForm from "./LoginForm";



const LoginFormContainer = () => {

    const {login} = useActions()

    return (
        <LoginForm login={login}/>
    );
};

export default LoginFormContainer;