import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById, like, notlike } from "../../features/posts/postsSlice";
import { Spin } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Comments from "../Comments/Comments";

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
    <div>
      <h1>PostDetail</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <span className="wish">{localLikes?.length}</span>
      {isAlreadyLiked ? (
        <HeartFilled onClick={handleLike} />
      ) : (
        <HeartOutlined onClick={handleLike} />
      )}

      <Comments/>
    </div>
  );
};

export default PostDetail;
