import React, { FC } from 'react'
import { IPost } from '../models/IPost';
// import dayjs from 'dayjs';

interface PostItemProps {
    post: IPost;
};

const PostItem: FC<PostItemProps> = ({ post }) => {
    return (
        <div>
            <div>{post.name}</div>
            <div>{post.text}</div>
            <div>{post.owner} 
            {/* {dayjs(post.created).format('DD-MM-YYYY')} */}
            </div>
            <button>Удалить</button>
        </div>
    );
};

export default PostItem