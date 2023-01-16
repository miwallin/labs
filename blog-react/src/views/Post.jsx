import { useLoaderData } from 'react-router-dom'

const Post = () => {

    const post = useLoaderData();

    return (
        <div className="Post">
            <h1>{post.title}</h1>
            <h3>by User {post.userId}</h3>
            <p>{post.body}</p>
        </div>
    )
}
export default Post