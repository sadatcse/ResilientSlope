import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import {HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './pages/default/Root';
import Error404 from './pages/default/Error404';
import Home from './components/Home';
import Contact from './pages/Contact';
import Services from './pages/Services​';
import VetiverGrass from './pages/VetiverGrass​';
import RecycledPlasticPin from './pages/RecycledPlasticPin​';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path:'/',
        element:<Home></Home>
        
      },
      {
        path:'/contact',
        element:<Contact></Contact>
        
      },     
      {
        path:'/service',
        element:<Services></Services>
        
      },    
      {
        path:'/vetivergrass',
        element:<VetiverGrass></VetiverGrass>
        
      },    
      {
        path:'/recycledplastic',
        element:<RecycledPlasticPin></RecycledPlasticPin>
        
      },      
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
      </React.StrictMode>,
)