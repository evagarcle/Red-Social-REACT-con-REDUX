
import { Spin } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { like, notlike } from "../../features/posts/postsSlice";

const Post = () => {

    const { posts, isLoading } = useSelector((state) => state.posts);
    const { user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();


    if (isLoading) {
        return <Spin />
    }


    const post = posts.map((post) => {
        const isAlreadyLiked = post.likes?.includes(user?._id);
        return (
            <div className="post" key={post._id}>
                <Link to={"/posts/" + "id/" + post._id}>
                    <p>{post.title}</p>
                     <p>{post.imageUrl && <img src={post.imageUrl} alt="Post Image" />}</p>

                </Link>
                <span className="wish">{post.likes?.length}</span>
                {isAlreadyLiked ? (
                    <HeartFilled onClick={() => dispatch(notlike(post._id))} />
                ) : (
                    <HeartOutlined onClick={() => dispatch(like(post._id))} />
                )}

            </div>
        );
    });
    return <div className='post-container'>{post}</div>
};

export default Post;

