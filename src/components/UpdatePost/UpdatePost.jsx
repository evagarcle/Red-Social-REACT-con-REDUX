import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getById, updatePost } from '../../features/posts/postsSlice';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import './UpdatePost.scss';

const UpdatePost = () => {
    const [updatedData, setupdatedData] = useState({
        title: '',
        body: ''
    });
    const [error, setError] = useState('');

    const { title, body } = updatedData;
    const { _id } = useParams();
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
        return <h1 className="loading">Cargando...</h1>;
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await dispatch(updatePost({ updatedData, _id }));
        navigate("/profile");
    }

    return (
        <div className="update-post-container">
            <div className="current-post">
                <div className="card post-card">
                    <div className="card-body">
                        <p className="current-title">{post.title}</p>
                        <p className="current-body">{post.body}</p>
                    </div>
                    {post.imageUrl && <img src={post.imageUrl} alt="Post Image" className="current-image" />}
                    <div className="button-container">
                        <button className="btn btn-primary mr-2" onClick={() => navigate("/profile")}>Back to Profile</button>
                        <button className="btn btn-danger" onClick={() => navigate("/id/" + post._id)}>Delete</button>
                    </div>
                </div>
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
export default UpdatePost;