import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/posts/postsSlice";
import { useEffect } from "react";

const PostDetail = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getById(_id));
  }, []);

  return (
    <div>
      <h1>PostDetail</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
