import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import './Nav/nav.css'
import './Box/box.css'
import './Chart/chart.css'
import './Trade/trade.css'
import './Price/price.css'
import './Asset/asset.css'
import './SignIn/signin.css'
import './SignUp/signup.css'
import '../src/Landing/Hero/hero.css'
import Landing from '../src/Landing/Landing.jsx'
import Nav from './Nav/Nav.jsx';
import Portfolio from './Portfolio/Portfolio.jsx'
import Asset from './Asset/Asset.jsx'
import SignIn from './SignIn/SignIn.jsx'
import SignUp from './SignUp/SignUp.jsx'
import { NextUIProvider } from '@nextui-org/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Nav />
      <Landing />
    </>,
  },
  {
    path: '/portfolio',
    element: <>
      <Nav />
      <Portfolio />
    </> 
  },
  {
    path: '/trade',
    element: <>
      <App />
    </> 
  },
  {
    path: '/asset',
    element: <>
      <Nav />
      <Asset />
    </> 
  },{
    path:'/signin',
    element:<SignIn />
  },
  {
    path:'/signup',
    element:<SignUp/>
  }
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}>
     <NextUIProvider>
      <App />
     </NextUIProvider>
    </RouterProvider>
  </React.StrictMode>,
)
