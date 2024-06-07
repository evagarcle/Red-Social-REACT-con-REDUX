import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/posts/postsSlice";

const PostDetail = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  
  useEffect(() => {
    dispatch(getById(_id));
  }, []);

  return (
    <div>
      <h1>PostDetail</h1>
      <p>{posts.title}</p>
      <p>{posts.body}</p>
    </div>
  );
};

export default PostDetail;
