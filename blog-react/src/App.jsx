import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { WriteAction } from './views/Write'
import Root from './layouts/Root'
//views
import Home from './views/Home'
import Post from './views/Post'
import Write from './views/Write'

const loadAllPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if(!response.ok) {
    throw new Error('could not get posts');
  }
  const data = await response.json();
  return data;
}
const loadPost = async ({ params }) => {
  const { id } = params;
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  if(!response.ok) {
    throw new Error('could not get post');
  }
  const data = await response.json();
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
        element: <Write />,
        action: WriteAction
      },
      {
        path: "post/:id",
        element: <Post />,
        loader: loadPost
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