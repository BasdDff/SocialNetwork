import styles from './Navbar.module.scss'
import { useState } from 'react';
import Burger from '../Test/UI/Burger/Burger';

const Navbar = () => {

    const [active, setActive] = useState<boolean>(false)

    return (
        <div className={styles.nav}>
            Navbar
            <div className={styles.nav__burger}>
                <Burger active={active} setActive={setActive}>
                    I m
                </Burger>
            </div>

        </div>
    )
}

export default Navbar