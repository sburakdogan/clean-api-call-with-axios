import { useEffect, useState } from "react"
import Services from "../api";
import "./styles.scss"
import { Link } from "react-router-dom";

export const Posts = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        fetchPosts();
    }, [])

    const fetchPosts = async () => {
        const response = await Services.Post.listPosts();
        setPosts(response);
    }

    return (
        <div className="posts">
            {posts && posts.map((post) => (
                <div className="item" key={post.id}>
                    <div className="top">
                        <h1 className="title">
                            {post.title.length > 30 ? post.title.slice(0, 30) + '...' : post.title}
                        </h1>
                        <Link to={`/posts/${post.id}`}>
                            <button>
                                Detail
                            </button>
                        </Link>

                    </div>
                    <p>
                        {post.body}
                    </p>
                </div>
            ))}
        </div>
    )
}