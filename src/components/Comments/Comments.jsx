import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../features/comments/commentsSlice"; // Asegúrate de que la ruta sea correcta
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import { getById } from "../../features/posts/postsSlice";

const Comments = () => {
    const { _id } = useParams(); // Obtén el ID del post de la URL
    const dispatch = useDispatch();
    const [comment, setComment] = useState("");
    const { user } = useSelector((state) => state.auth); // Para obtener el usuario actual
    const { post, isLoading } = useSelector((state) => state.posts); // Asegúrate de que esto apunte al estado correcto
    const comments = post?.commentIds || []; 


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user) {
            await dispatch(addComment({ _id, comment }));
            setComment("");
            await dispatch(getById(_id));

        } else {
            alert("Debes estar logueado para comentar.");
        }
    };


    return (
        <div>
            <h2>Comments</h2>
            {isLoading && <Spin />}

            <form onSubmit={handleSubmit}>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment"
                    required
                />
                <button type="submit">Submit</button>
            </form>

            {comments.map((comment) => (
                <div key={comment._id}>
                    <p>{comment.comment}</p>
                    <p>By: {comment.userId.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Comments;
