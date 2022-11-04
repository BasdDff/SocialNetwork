import styles from "./Burger.module.scss";
import './Burger.scss'
import React, { FC } from 'react';
import avatar from '../../../assets/avatar.jpg'

interface Burger {
    active: boolean
    setActive: (active: boolean) => void
    children: React.ReactNode
}

const Burger: FC<Burger> = ({ active, setActive, children }) => {    
    return (
        <>
            <nav className={`${styles.nav}`}>
                <img src={avatar} alt="avatar" className={active ? `${styles.img} ${styles.active}` : styles.img} onClick={() => setActive(!active)}/>
            </nav>
            <div className={active ? `${styles.menu} ${styles.active}` : `${styles.menu}`}
                onClick={() => setActive(false)}>
                <div className={active ? `${styles.blur} ${styles.active}` : `${styles.blur}`} />
                <div onClick={e => e.stopPropagation()} className={active ? `${styles.content} ${styles.active} burger-content` : `${styles.content} burger-content`}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Burger