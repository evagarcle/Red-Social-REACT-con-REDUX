import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, getAll } from '../../features/posts/postsSlice';
import { useNavigate } from 'react-router-dom';
import './NewPost.scss';

const NewPost = () => {
  const [newPostData, setNewPostData] = useState({
    title: '',
    body: ''
  });
  const [error, setError] = useState('');

  const { title, body } = newPostData;
  const { isSuccess, isError, token, user, userId } = useSelector((state) => state.auth);
  // const { isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess || isError) {
      dispatch(getAll());
    }
  }, [isSuccess, isError, dispatch, user, token, userId]);

  const onChange = (e) => {
    setNewPostData({
      ...newPostData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!title || !body) {
      setError('Both title and body are required.');
      return;
    }
    setError('');

    await dispatch(create(newPostData));
    navigate("/profile");
  };

  return (
    <div className="new-post-container">
      <form className="new-post-form" onSubmit={onSubmit}>
        <h1>Create a new post</h1>
        {error && <p className="error-message">{error}</p>}

        <input
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={onChange}
          className="new-post-input"
        />
        <textarea
          name="body"
          value={body}
          placeholder="Body"
          onChange={onChange}
          className="new-post-textarea"
        />
        <button type="submit" className="new-post-button">Create</button>
      </form>
    </div>
  );
};

export default NewPost;
