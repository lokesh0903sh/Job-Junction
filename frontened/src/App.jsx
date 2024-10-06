import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/login'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/login',
    element:<Login/>
  },
  {
    path: '/signup',
    element:<Signup/>
  },
  {
    path: '/jobs',
    element:<Jobs/>
  },
  {
    path: '/browse',
    element:<Browse/>
  },
  {
    path: '/profile',
    element:<Profile/>
  },
  {
    path: '/description/:id',
    element:<JobDescription/>
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
