import React from 'react';
import styles from './Links.module.scss'
import {Link} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';

const Links = () => {
    return (
        <ul className={styles.links__list}>
                <li className={styles.links__item}>
                    <Link to={"/"} className={styles.links__link}>
                        <HomeOutlinedIcon className={styles.links__icon}/>
                        <span>Home</span>
                    </Link>
                </li>
                <li className={styles.links__item}>
                    <Link to={"/profile"} className={styles.links__link}>
                        <AccountCircleOutlinedIcon className={styles.links__icon}/>
                        <span>Profile</span>
                    </Link>
                </li>
                <li className={styles.links__item}>
                    <Link to={"/users"} className={styles.links__link}>
                        <GroupAddOutlinedIcon className={styles.links__icon}/>
                        <span>Users</span>
                    </Link>
                </li>
        </ul>
    );
};

export default Links;