import React, {FC} from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {IUser} from "../../types/IUser";
import {IPost} from "../../types/IPost";
import styles from './ProfileInfo.module.scss'
import {useNavigate} from 'react-router-dom';
import defaultBackground from '../../assets/img/defaultBackground.jpg'
import defaultUser from '../../assets/img/defaultUser.png'


interface ProfileInfoProps {
    user: IUser
    userPosts: IPost[]
}

const ProfileInfo: FC<ProfileInfoProps> = ({user, userPosts}) => {

    const navigate = useNavigate();

    return (
        <div className={`margin-bottom-1`}>
            <div className={`${styles.back_wrapper} margin-bottom-2`}>
                <KeyboardBackspaceIcon className={styles.back_arrow} onClick={() => navigate(-1)}/>
                <div className={styles.back_info}>
                    <div>
                        {user.username}
                    </div>
                    <div>
                        {userPosts.length} Posts
                    </div>
                </div>
            </div>
            <div className={`margin-bottom-2`}>
                <div className={`${styles.background} margin-bottom-2`}>
                    <img src={`${user.background ? `http://localhost:5000/${user.background}` : defaultBackground}`}
                         alt=""/>
                    <button className={`${styles.btn_edit} border hover padding`}>Edit profile</button>
                </div>
                <div className={styles.avatar}>
                    <img src={`${user.avatar ? `http://localhost:5000/${user.background}` : defaultUser}`} alt=""/>
                </div>
            </div>
            <div className={styles.info_wrapper}>
                <div>
                    {user.username}
                </div>
                <div>
                    {user.about}
                </div>
                <div>
                    Joined {new Date(user.joinedDay).toLocaleString("ru", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric"
                    })}
                </div>
                <div className={styles.follow_wrapper}>
                    <div className={styles.follow_following}>
                        {user.followings.length} Following
                    </div>
                    <div>
                        {user.followers.length} Followers
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;