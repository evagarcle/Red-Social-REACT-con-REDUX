import React from "react";
import { useSelector } from "react-redux";

const Comments = () => {
    const comments = useSelector((state) => state.posts.post.commentIds)
    //const post = useSelector((state) => state.posts.post.find(post => post._id === postId));
  

    return (
        <div>
            <h2>Comments</h2>

            {comments?.map((comment) => (
                <>
                    {console.log(comment)}
                    <div key={comment._id}>
                        <p>{comment.text}</p>
                        <p>By: {comment.user}</p>

                    </div>
                </>
            ))}
        </div>
    );
};

export default Comments;
