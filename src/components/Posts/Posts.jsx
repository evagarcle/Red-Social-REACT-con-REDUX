import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { getAll } from '../../features/posts/postsSlice';
import Post from '../Post/Post';

const Posts = () => {
    const {isLoading} = useSelector((state) => state.posts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll());
    }, [])
    if (isLoading) {
        return <h1>Cargando posts...</h1>
    }
    return (
        <div>
            <h1>Posts</h1>
            <Post />
        </div>
    )
}

export default Posts