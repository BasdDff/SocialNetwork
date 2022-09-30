import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Burger from '../../components/Test/UI/Burger/Burger';
import Widget from '../../components/Widget/Widget';
import styles from "./MainLayout.module.scss";


const MainLayout = () => {
    return (
        <div className={`${styles.wrapper} background-color color`}>
            <div className={styles.wrapper__width}>
                <div className={styles.nav__wrapper}>
                    <div className={styles.nav}>
                        <Navbar/>
                    </div>
                </div>
                <div className={styles.route}>
                    <Outlet />
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