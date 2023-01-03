import React, {FC} from 'react';
import {IPost} from "../../types/IPost";
import Post from "../Post/Post";

interface PostsLineProps {
    posts: IPost[]
}

const PostsLine: FC<PostsLineProps> = ({posts}) => {
    console.log(posts)
    return (
        <div>
            {posts.map((post) => (
                <Post key={post._id} _id={post._id} userId={post.userId} image={post.image} description={post.description} likes={post.likes}/>
            ))}
        </div>
    );
};

export default PostsLine;