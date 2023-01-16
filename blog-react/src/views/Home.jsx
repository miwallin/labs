import { useLoaderData, Link } from 'react-router-dom'

const Home = () => {

    const posts = useLoaderData();

    const CutOff = ( { bodyText } ) => {
        return bodyText.substring(0, 100) + '...';
    };

    return (
        <div className="Home">
            {
            posts.map(post => (
                <Link to={'/post/'+ post.id} className="post-link" key={post.id}>
                    <div className="post-container">
                        <h3>{post.title}</h3>
                        <CutOff bodyText={post.body} />
                    </div>
                </Link>
            ))
            }
        </div>
    )
}
export default Home