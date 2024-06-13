import { Spin } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { like, notlike } from "../../features/posts/postsSlice";
import './Post.scss'; 

const Post = () => {
    const { posts, isLoading } = useSelector((state) => state.posts);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    if (isLoading) {
        return <div className="text-center my-5"><Spin /></div>
    }

    const post = posts.map((post) => {
        const isAlreadyLiked = post.likes?.includes(user?._id);
        return (
            <div className="col-md-4 mb-4" key={post._id}>
                <div className="card post-card">
                    <div className="card-body">
                        <Link to={"/posts/" + "id/" + post._id} className="text-decoration-none">
                            <h5 className="card-title">{post.title}</h5>
                            {post.imageUrl && <img src={post.imageUrl} alt="Post" className="img-fluid mb-3" />}
                        </Link>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="text-muted">{post.likes?.length} {post.likes?.length === 1 ? 'like' : 'likes'}</span>
                            {isAlreadyLiked ? (
                                <HeartFilled onClick={() => dispatch(notlike(post._id))} style={{ color: 'red' }} />
                            ) : (
                                <HeartOutlined onClick={() => dispatch(like(post._id))} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return <div className="container mt-5 post-container">
        <div className="row">
            {post}
        </div>
    </div>
};

export default Post;
