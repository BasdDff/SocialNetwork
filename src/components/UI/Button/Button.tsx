import React from 'react';
import styles from './Button.module.scss'

const Button = ({text, onClick, className, ...props}: {text: string, onClick?: () => void, className?: string}) => {
    return (
        <button className={`${styles.button} ${className}`} {...props} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;