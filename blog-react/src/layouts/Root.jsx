import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Root = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default Root