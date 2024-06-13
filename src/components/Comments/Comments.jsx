import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../features/comments/commentsSlice";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import { getById } from "../../features/posts/postsSlice";
import "./Comments.scss";

const Comments = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");
  const { user } = useSelector((state) => state.auth);
  const { post, isLoading } = useSelector((state) => state.posts);
  const comments = post?.commentIds || [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      await dispatch(addComment({ _id, comment: commentText }));
      setCommentText("");
      dispatch(getById(_id));
    } else {
      alert("Debes estar logueado para comentar.");
    }
  };

  return (
    <div className="comments-container">
      <h2 className="comments-title">Comments</h2>
      {isLoading && <Spin />}

      <form className="add-comment-form" onSubmit={handleSubmit}>
        <textarea
          className="comment-input"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment"
          required
        />
        <button className="comment-submit-btn" type="submit">
          Add a comment
        </button>
      </form>

      {comments.map((comment) => (
        <div key={comment._id} className="comment-item">
          <p className="comment-text">{comment.comment}</p>
          <p className="comment-author">By: {comment.userId.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
