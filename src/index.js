import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Uzvlerimiz from './pages/uzvlerimiz';
import Blogs from './pages/blogs';
import New from './pages/home/new';
import Faq from './pages/faq';
import { Provider } from 'react-redux';
import { CustomStore } from './store';
import ErrorPage from './pages/errorPage';
import Login from "./components/login";
import Register from "./components/register"
import User from "./pages/user"



const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/uzvlerimiz",
        element:<Uzvlerimiz/>
      },
      {
        path:"/user/:id",
        element: <User/>

      },
      {
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"/",
        element:<New/>
      },
      {
        path:"/faq",
        element:<Faq/>
      },
    
    {
      path: "/*",
      element: <ErrorPage />,
  },
  {
    path: "/login",
    element:<Login/>,
}, 
{
  path: "/register",
  element: <Register/>,
},

    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={CustomStore}>
     <RouterProvider router={router}/>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

