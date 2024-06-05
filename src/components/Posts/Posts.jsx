import React from 'react'
import Post from './Post/Post'
import {useDispatch} from "react-redux"
import { getAll } from '../../features/posts/postsSlice';

const Posts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll());
    }, [])
    return (
        <div>
            <h1>Posts</h1>
            <Post />
        </div>
    )
}

export default Posts