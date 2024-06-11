import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Project from "./routes/Project"

import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/project",
    element: <Project/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <ToastContainer />
  </React.StrictMode>
)
