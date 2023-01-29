import React, {FC} from 'react';
import styles from './UsersList.module.scss'
import {IUser} from "../../types/IUser";
import imageDefault from "../../assets/img/defaultUser.png"
import { useNavigate } from 'react-router-dom';

interface UsersListProps {
    _id: string
    users: IUser[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

const UsersList: FC<UsersListProps> = ({_id, users, follow, unfollow}) => {

    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            {users.map(user => (
                <div key={user._id} className={styles.item}>
                    <div className={`${styles.text} margin-bottom-2`} onClick={() => navigate(`/profile/${user._id}`)}>
                        {user._id}
                    </div>
                    <div>
                        <img src={user.avatar ? user.avatar : imageDefault} className={`${styles.avatar} margin-bottom-2`} alt=""/>
                    </div>
                    <div>
                        {user.followers.includes(_id) ?
                            <div onClick={() => unfollow(user._id)} className={`${styles.btn} border padding hover`}>
                                unfollow
                            </div> :
                            <div onClick={() => follow(user._id)} className={`${styles.btn} border padding hover`}>
                                follow
                            </div>
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UsersList;