const CommentService = (client) => {
    const listCommentsByPostId = async(postId) => {
        try {
            const comments = await client.get(`/posts/${postId}/comments`);
            return comments.data;
        } catch {
            console.log('error');
        }
    }

    return {
        listCommentsByPostId
    }
}

export default CommentService;