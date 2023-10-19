//building our App 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import Header from './components/Header.js';
import Body from './components/Body';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Error from './components/Error';
import Contact from './components/Contact';
import About from './components/About';

/*
  *Header 
  --logo
  --Nav Items
  *Body
  --Search
  --RestaurantContainer
  --RestaurantCard
  *Footer
  --CopyRight
  --Links
  --Address
  --Contact
*/




//Create A component App Layout
const AppLayout=()=>{
    return(
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
    )
}
//Render root
const root=ReactDOM.createRoot(document.getElementById('root'))
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/about",
                element:<About/>,
            },
            { 
                path:"/about",
                element:<Contact/>,
            },
        ],
        errorElement:<Error/>,
    },
])


root.render(<RouterProvider router={appRouter}/>)