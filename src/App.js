import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import AllPhones from './components/PhoneCtg/AllPhones';
import Login from './Login/Login';
import Regi from './Regi/Regi';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'home',
          element: <Home></Home>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'regi',
          element: <Regi></Regi>
        },
        {
          path:'/allPhones/:id',
          element: <AllPhones></AllPhones>
        }
      ]
      
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
