import styles from './Navbar.module.scss'
import React, {useState} from 'react';
import Burger from '../UI/mobile/Burger/Burger';
import Links from "../UI/Links/Links";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import MobileLinks from "../UI/mobile/MobileLinks/MobileLinks";

const Navbar = () => {

    const [active, setActive] = useState<boolean>(false)

    return (
        <div className={styles.nav}>
            <div className={`${styles.nav__burger} padding-2`}>
                <Burger active={active} setActive={setActive}>
                    <div className="margin-1">
                        <MobileLinks/>
                    </div>
                </Burger>
            </div>
            <div className={`${styles.nav__linksWrapper}`}>
                <Links/>
                <SwitchTheme/>
            </div>
        </div>
    )
}

export default Navbar