import { useLoaderData, Link } from 'react-router-dom'

const Home = () => {

    const posts = useLoaderData();
    
    return (
        <div className="Home">
            {
            posts.map(post => (
                <Link to={'/post/'+ post.id} className="post-link" key={post.id}>
                    <div className="post-container">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                </Link>
            ))
            }
        </div>
    )
}
export default Home