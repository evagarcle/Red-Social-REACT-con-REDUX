
import { Spin } from "antd";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Post = () => {

    const { posts, isLoading } = useSelector((state) => state.posts);

    if (isLoading) {
        return <Spin/>
    }

    const post = posts.map((post) => {
    return (
            <div className="post" key={post._id}>
                <Link to = {"/posts/" + "id/" + post._id}>
                <p>{post.title}</p>
                </Link>
            </div>
        );
    });
    return <div>{post}</div>
};

export default Post;