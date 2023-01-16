import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './layouts/Root'
//views
import Home from './views/Home'
import Post from './views/Post'
import Write from './views/Write'

const loadAllPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if(!res.ok) {
    throw new Error('could not get posts');
  }
  const data = await res.json();
  return data;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: loadAllPosts
      },
      {
        path: "write",
        element: <Write />
      },
      {
        path: "post/:id",
        element: <Post />
        //loader: loadPost
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App