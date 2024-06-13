import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getById, updatePost } from '../../features/posts/postsSlice';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const UpdatePost = () => {
    const [updatedData, setupdatedData] = useState({
        title: '',
        body: ''
    });
    const [error, setError] = useState('');

    const { title, body } = updatedData;
    const { _id } = useParams();
    const { isSuccess, isError, token, user, userId } = useSelector((state) => state.auth);
    const { post, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getById(_id));
    }, [dispatch, _id]);

    useEffect(() => {
        if (post) {
            setupdatedData({
                title: post.title,
                body: post.body,
            });
        }
    }, [post]);

    const onChange = (e) => {
        setupdatedData({
            ...updatedData,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!title || !body) {
            setError('Both title and body are required.');
            return;
        }
        setError('');

        await dispatch(updatePost({ updatedData, _id }));
        navigate("/profile");
    };

    if (isLoading) {
        return <h1>Cargando...</h1>;
    }

    return (
        <div>
            <div>
                <h1>Edit post</h1>
                <p>{post.title}</p>
                <p>{post.body}</p>
                <p>{post.imageUrl && <img src={post.imageUrl} alt="Post Image" />}</p>
            </div>
            <form onSubmit={onSubmit}>
                {error && <p className="error-message">{error}</p>}
                <input type="text" name='title' value={title} placeholder='Title' onChange={onChange} />
                <textarea name='body' value={body} placeholder='Body' onChange={onChange} />
                <button type='submit'>Update</button>
            </form>
        </div>
    );
};

export default UpdatePost;
