import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { deletePostById, getAll } from '../../features/posts/postsSlice';
import './Profile.scss'; 

const Profile = () => {
  const { user, token } = useSelector((state) => state.auth);
  const { posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

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
    <div className="container mt-5 profile-container">
      <div className="profile-header">
        <p>User name: {user.name}</p>
        <p>Email: {user.email}</p>
        <h2>* MIS POSTS *</h2>
      </div>
      <div className='post-container'>
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <div className="col-md-4 mb-4" key={post._id}>
              <div className="card post-card">
                <div className="card-body">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <p>{post.imageUrl && <img src={post.imageUrl} alt="Post Image" />}</p>
                  <button onClick={() => handleDelete(post._id)}>x</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
