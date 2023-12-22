import client from "./client";
import CommentService from "./services/Comment";
import PostService from "./services/Post";

const Services = {
    Post: PostService(client),
    Comment: CommentService(client)
}

export default Services;