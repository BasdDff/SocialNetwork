import React, {FC, useEffect, useState} from 'react';
import styles from './Post.module.scss'
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import imageDefault from '../../assets/img/defaultUser.png'
import {IUser} from "../../types/IUser";
import set = Reflect.set;
import {Link} from "react-router-dom";
import {userApi} from "../../api/user-api";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useActions} from "../../hooks/useRedux";

interface PostProps {
    userId: string
    _id: string
    image: string
    description: string
    likes: string[]
    likePost?: () => void
    deletePost?: () => void
    editPost?: () => void
}

const Post: FC<PostProps> = ({_id,userId, image, description, likes}) => {

    const [user, setUser] = useState<IUser>()

    const getUserById = async () => {
        const response = await userApi.getUserById("639b4d99de28f8e363302793")
        setUser(response.data)
    }

    const {likePost} = useActions()

    useEffect(() => {
        getUserById()
    }, [userId])

    return (
        <div className={`${styles.wrapper} background-post`}>
            <div className={styles.user}>
                <img src={user?.avatar ? user.avatar : imageDefault} alt="" className={styles.user__avatar}/>
                <Link to={`/profile/${user?._id}`} className={styles.user__username}> {user?.username} </Link>
            </div>
            <div className={styles.post}>
                <div className={styles.post__description}>
                    {description}
                </div>
                {image ?
                    <img src={`http://localhost:5000/${image}`} alt="" className={styles.post__image}/>
                    : ""
                }
                <div className={styles.post__icons}>
                    <div className={styles.post__likesQuantity}>
                        {likes.length > 0 ? likes.length : ""}
                    </div>
                    <FavoriteBorderIcon className={styles.post__icon_like} onClick={() => likePost(_id, user?._id)}/>
                </div>
            </div>
        </div>
    );
};

export default Post;