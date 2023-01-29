import React, {FC, useState} from 'react';
import styles from './LoginForm.module.scss'
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

interface LoginFormProps {
    login: (user: {email: string, password: string}) => void
}

const LoginForm: FC<LoginFormProps> = ({login}) => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [error, setError] = useState<string>("")
    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
        setError("")
    }
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const signIn = () => {
        //event: React.FormEvent<HTMLButtonElement>
        //event.preventDefault()
        login({email, password})
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.login}>
                <div className={styles.form}>
                    <Input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeEmail(e)}
                           error={error} placeholder="email" className={styles.input}
                           classNameWrapper={styles.input_wrapper} label="email"/>
                    <Input value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangePassword(e)}
                           error={error} placeholder="password" className={styles.input}
                           classNameWrapper={styles.input_wrapper} label="password"/>
                    <Button text="Log in" onClick={() => {
                        signIn()
                    }} className={styles.btn}/>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;