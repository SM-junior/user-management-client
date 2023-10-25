import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateUser from './components/UpdateUser.jsx';
import AddUser from './components/AddUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:3000/users')
  },
  {
    path: "/add",
    element: <AddUser></AddUser>,
  },
  {
    path: "/update/:id",
    element: <UpdateUser></UpdateUser>,
    loader: ({params})=> fetch(`http://localhost:3000/users/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
