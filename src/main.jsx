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
import Termsofuse from './pages/seopage/Termsofuse';
import Privacypolicy from './pages/seopage/Privacypolicy';
import Cookiepolicy from './pages/seopage/Cookiepolicy';
import Projects from './pages/Projects';
import DetailsProjects from './pages/DetailsProjects';


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
      {
        path:'/termsofuse',
        element:<Termsofuse></Termsofuse>
        
      },  
      {
        path:'/privacypolicy',
        element:<Privacypolicy></Privacypolicy>
        
      },  
      {
        path:'/cookiepolicy',
        element:<Cookiepolicy></Cookiepolicy>
        
      },
      {
        path:'/projects',
        element:<Projects></Projects>
        
      },
      {
        path:'projects/:id',
        element:<DetailsProjects></DetailsProjects>
      }    
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