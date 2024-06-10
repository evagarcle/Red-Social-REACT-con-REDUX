import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { getByUserId } from '../../features/posts/postsSlice';

const Profile = () => {
  const { user, token } = useSelector((state) => state.auth);
  const { userPosts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user._id) {
      dispatch(getByUserId(user._id));
    }
  }, [dispatch, user, token]);

  if (!user || isLoading) {
    return <Spin />;
  }

  // const userPosts = posts.filter(post => post.userId === user._id);

  return (
    <>
      <p>User name: {user.name}</p>
      <p>Email: {user.email}</p>
      <div>
        <h2>* Mis posts *</h2>
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <div key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
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
