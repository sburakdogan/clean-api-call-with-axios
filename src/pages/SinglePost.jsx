import { Link, useParams } from "react-router-dom"
import "./styles.scss"
import { useEffect, useState } from "react";
import Services from "../api";
import { Comments } from '../components/Comments'

export const SinglePost = () => {
    const [post, setPost] = useState();
    const { postId } = useParams();

    useEffect(() => {
        fetchPostDetails(postId);
    }, []);

    const fetchPostDetails = async (postId) => {
        const response = await Services.Post.getPostById(postId);
        setPost(response);
    }

    return (
        <div className="postDetails">
            {post ?
                <div className="item">
                    <div className="top">
                        <h1 className="title">
                            {post.title.length > 30 ? post.title.slice(0, 30) + '...' : post.title}
                        </h1>
                        <Link to={`/`}>
                            <button>
                                Back
                            </button>
                        </Link>
                    </div>
                    <p>
                        {post.body}
                    </p>
                    <div className="bottom">
                        <Comments postId={postId} />
                    </div>
                </div> : <>Loading...</>}
        </div>
    )
}