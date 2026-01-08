// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Layout
import Layout from './components/Layout'

// Pages
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'

// Create router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,  // This is the default route "/"
        element: <Dashboard />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'skills',
        element: <Skills />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'blog/:id',  // Dynamic route for individual blog posts
        element: <BlogPost />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)