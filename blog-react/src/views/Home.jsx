import { useLoaderData } from 'react-router-dom'

const Home = () => {

    const posts = useLoaderData();
    
    return (
        <div className="Home">
            Home
            {
                posts.map(post => (
                    <div className="post-container">
                        <h3>{post.title}</h3>
                    </div>
                ))
            }
        </div>
    )
}
export default Home