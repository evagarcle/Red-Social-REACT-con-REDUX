import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById, like, notlike } from "../../features/posts/postsSlice";
import { Spin } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Comments from "../Comments/Comments";
import './PostDetail.scss';

const PostDetail = () => {
  const { _id } = useParams();
  const { post, isLoading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [localLikes, setLocalLikes] = useState([]);

  useEffect(() => {
    dispatch(getById(_id));
  }, [dispatch, _id]);

  useEffect(() => {
    if (post) {
      setLocalLikes(post.likes);
    }
  }, [post]);

  if (isLoading) {
    return <Spin />;
  }

  const isAlreadyLiked = localLikes?.includes(user?._id);

  const handleLike = () => {
    if (isAlreadyLiked) {
      dispatch(notlike(post._id));
      setLocalLikes((prev) => prev.filter((id) => id !== user._id));
    } else {
      dispatch(like(post._id));
      setLocalLikes((prev) => [...prev, user._id]);
    }
  };

  return (
    <div className="post-detail-container">
      <div className="post-content">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-body">{post.body}</p>
        {post.imageUrl && <img src={post.imageUrl} alt="Post Image" className="post-image" />}
        <div className="post-actions">
          <span className="wish">{localLikes?.length}</span>
          {isAlreadyLiked ? (
            <HeartFilled className="like-icon" onClick={handleLike} />
          ) : (
            <HeartOutlined className="like-icon" onClick={handleLike} />
          )}
        </div>
      </div>
      <Comments post={post} />
    </div>
  );
};

export default PostDetail;
