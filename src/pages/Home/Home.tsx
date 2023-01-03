import React, {useEffect} from 'react';
import NewPost from "../../components/NewPost/NewPost";
import Post from "../../components/Post/Post";
import {useActions, useAppSelector} from "../../hooks/useRedux";
import PostsLine from "../../components/PostsLine/PostsLine";

const Home = () => {

    const {getTimeLine} = useActions()

    useEffect(() => {
        getTimeLine()
    }, [])

    const {posts} = useAppSelector(state => state.postReducer)
    console.log(posts)
    return (
        <div>
            <NewPost/>
            <PostsLine posts={posts}/>
            {/*<Post userId="1" description="My trading today"*/}
            {/*      image="https://pbs.twimg.com/media/Fieo7BcWYAE-Ou_?format=jpg&name=4096x4096"*/}
            {/*      likes={["12wqd3", "23dw1"]}/>*/}
            {/*<Post userId="1" description="My trading today"*/}
            {/*      image="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"*/}
            {/*      likes={["12wqd3", "23dw1"]}/>*/}
        </div>
)
    ;
};

export default Home;