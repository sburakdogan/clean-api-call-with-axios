const PostService = (client) => {
    const listPosts = async() => {
        try {
            const posts = await client.get('/posts');
            return posts.data;
        } catch {
            console.log('error');
        }
    }
    const getPostById = async(postId) => {
        try {
            const post = await client.get(`/posts/${postId}`);
            return post.data;
        } catch {
            console.log('error');
        }
    }
    const createPost = async(post) => {
        try {
            await client.post(`/posts`, post);
        } catch {
            console.log('error');
        }
    }

    return {
        listPosts,
        getPostById,
        createPost
    }
}

export default PostService;