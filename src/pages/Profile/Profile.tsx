import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import {useActions, useAppSelector} from "../../hooks/useRedux";
import PostsLine from "../../components/PostsLine/PostsLine";

const Profile = () => {

    const {user, currentUser} = useAppSelector(state => state.userReducer)
    const {userPosts} = useAppSelector(state => state.postReducer)
    console.log(userPosts)
    const {userId} = useParams()

    const {getUserById, getUserPosts} = useActions()

    useEffect(() => {
        if (userId) {
            getUserById(userId)
            getUserPosts(userId)
        } else if (user._id) {
            getUserById(user._id)
            getUserPosts(user._id)
        }
    }, [userId, user._id])

    console.log(currentUser)

    return (
        <>
            <ProfileInfo user={currentUser} userPosts={userPosts}/>
            <PostsLine posts={userPosts}/>
        </>
    );
};

export default Profile;