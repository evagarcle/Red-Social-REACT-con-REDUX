import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { deletePostById, getAll } from '../../features/posts/postsSlice';
import { useNavigate } from 'react-router-dom';
import './Profile.scss'; 

const Profile = () => {
  const { user, token } = useSelector((state) => state.auth);
  const { posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user._id) {
      dispatch(getAll(user._id));
    }
  }, [dispatch, user, token]);

  if (!user || isLoading) {
    return <div className="text-center my-5"><Spin /></div>;
  }

  const handleDelete = async (_id) => {
    await dispatch(deletePostById(_id));
    dispatch(getAll(user._id));
  }

  const userPosts = posts.filter(post => post.userId === user._id);

  return (
    <div className="container mt-5 profile-container">
      <div className="profile-header text-center mb-4">
        <p className="lead">User name: {user.name}</p>
        <p className="lead">Email: {user.email}</p>
        <h2 className="font-weight-bold sophisticated-header">MY POSTS</h2>
      </div>
      <div className="post-container row">
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <div className="col-md-4 mb-4" key={post._id}>
              <div className="card post-card">
                <div className="card-body">
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-text">{post.body}</p>
                  {post.imageUrl && <img src={post.imageUrl} alt="Post Image" className="img-fluid mb-3" />}
                  <button className="btn btn-primary mr-2" onClick={() => navigate("/id/" + post._id)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(post._id)}>Delete</button>
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