import React, {FC, useEffect, useState} from 'react';
import styles from './Input.module.scss'

//https://codesandbox.io/s/yqlz84rnyv?file=/src/style.css

const useValidation = () => {

}

interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    error: string
    placeholder: string
    className?: string
    classNameWrapper?: string
    label: string
}

const Input: FC<InputProps> = ({onChange, value, error, placeholder, label, className, classNameWrapper, ...props}) => {

    const [id, setId] = useState<string>("1")
    const [locked, setLocked] = useState<boolean>()
    const [focussed, setFocussed] = useState<boolean>(false)
    //const [placeholder, setPlaceholder] = useState(placeholder ? placeholder : "")
    //const [label, setLabel] = useState("email")

    const fieldClassName = `${styles.field} ${(locked ? focussed : focussed || value) && styles.focussed} ${locked && !focussed && styles.focussed}`;

    //const fieldClass = `${styles.field} ${focussed ? styles.focussed : ''}`

    // useEffect(() => {
    //     if (focussed) {
    //         setPlaceholder("")
    //     } else {
    //         setPlaceholder("email")
    //     }
    // }, [focussed])

    return (
        // <input type="text" {...props}/>
        <div className={`${fieldClassName} ${classNameWrapper}`}>
            <input
                id={id}
                type="text"
                value={value}
                placeholder={focussed ? "" : placeholder}
                onChange={onChange}
                onFocus={() => !locked && setFocussed(true)}
                onBlur={() => !locked && setFocussed(false)}
                className={className}
                {...props}
                //className={`${styles.input} ${focussed ? 'focussed' : ''}`}
            />
            <label htmlFor={id} className={error && 'error'}>
                {error || label}
            </label>
        </div>
    );
};

export default Input;