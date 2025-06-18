
import { createBrowserRouter } from 'react-router-dom'
import Navbar from './components/shared/navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import { RouterProvider } from 'react-router'
import Home from './components/Home'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
])

function App() {


  return (
    <>

      <div>
        <RouterProvider router={appRouter} />
      </div>

    </>
  )
}

export default App
