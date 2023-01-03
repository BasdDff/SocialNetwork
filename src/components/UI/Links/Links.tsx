import React from 'react';
import styles from './Links.module.scss'
import {Link} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Grid3x3OutlinedIcon from '@mui/icons-material/Grid3x3Outlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

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
                <Link to={"/"} className={styles.links__link}>
                    <Grid3x3OutlinedIcon className={styles.links__icon}/>
                    <span>Explore</span>
                </Link>
            </li>
            <li className={styles.links__item}>
                <Link to={"/"} className={styles.links__link}>
                    <NotificationsOutlinedIcon className={styles.links__icon}/>
                    <span>Notifications</span>
                </Link>
            </li>
            <li className={styles.links__item}>
                <Link to={"/"} className={styles.links__link}>
                    <EmailOutlinedIcon className={styles.links__icon}/>
                    <span>Messages</span>
                </Link>
            </li>
            <li className={styles.links__item}>
                <Link to={"/profile"} className={styles.links__link}>
                    <PermIdentityOutlinedIcon className={styles.links__icon}/>
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