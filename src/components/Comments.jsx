import React, { useEffect, useState } from 'react'
import Services from '../api';
import './styles.scss'

export const Comments = ({ postId }) => {
    const [comments, setComments] = useState();

    useEffect(() => {
        fetchComments();
    }, [])

    const fetchComments = async () => {
        const response = await Services.Comment.listCommentsByPostId(postId);
        setComments(response);
    }

    return (
        <div className='comments'>
            <h1>Comments:</h1>
            {comments ? comments.map((comment) => (
                <div className='comment' key={comment.id}>
                    <p>
                        {comment.body}
                    </p>
                    <span>
                        {comment.email}
                    </span>
                </div>
            )) : <>Loading...</>}
        </div>
    )
}