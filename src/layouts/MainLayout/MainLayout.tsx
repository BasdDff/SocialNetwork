import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Widget from '../../components/Widget/Widget';
import styles from "./MainLayout.module.scss";
import {useDarkMode} from "../../hooks/useDarkMode";


const MainLayout = () => {

    const [theme, setLightTheme, setDarkTheme] = useDarkMode()

    return (
        <div className={`${styles.wrapper} background-color color`}>
            <div className={styles.wrapper__width}>
                <div className={styles.nav__wrapper}>
                    <div className={styles.nav}>
                        <Navbar/>
                    </div>
                </div>
                <div className={styles.route}>
                    <div className="margin-3">
                        <Outlet />
                    </div>
                </div>
                <div className={styles.wid__wrapper}>
                    <div className={styles.wid}>
                        <Widget/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLayout