import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getAll } from '../../features/posts/postsSlice';
import Post from '../Post/Post';

const Posts = () => {
    const { isLoading } = useSelector((state) => state.posts)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAll());
    }, [dispatch])

    if (isLoading) {
        return <h1 className="text-center my-5">Loading posts...</h1>
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">NEW POSTS</h2>
            <div className="row">
                <Post />
            </div>
        </div>
    )
}

export default Posts
