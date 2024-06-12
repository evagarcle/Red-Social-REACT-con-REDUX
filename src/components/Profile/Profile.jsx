import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { deletePostById, getAll } from '../../features/posts/postsSlice';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, token } = useSelector((state) => state.auth);
  const { posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (user && user._id) {
      dispatch(getAll(user._id));
    }
  }, [dispatch, user, token]);

  if (!user || isLoading) {
    return <Spin />;
  }


  const handleDelete = async (_id) => {
    await dispatch(deletePostById(_id));
    dispatch(getAll(user._id));
  }



  const userPosts = posts.filter(post => post.userId === user._id);

  return (
    <>
      <p>User name: {user.name}</p>
      <p>Email: {user.email}</p>
      <h2>* Mis posts *</h2>
      <div className='post-container'>
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <div key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <p>{post.imageUrl && <img src={post.imageUrl} alt="Post Image" />}</p>
              <button onClick={() => navigate("/updatePost")}>Edit</button>
              <button onClick={() => handleDelete(post._id)}>x</button>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </>
  );
};

export default Profile;
