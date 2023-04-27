import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Component/Home/Home';
import OrderRivew from './assets/Component/OrderRivew/OrderRivew';
import Main from './assets/Component/Layout/Main';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main/>,
    children: [
      {
        path:'/',
        element: <Home/>,
        loader: () => fetch('tshirts.json')
      },
      {
        path: 'review',
        element: <OrderRivew/>,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
