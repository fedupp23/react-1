import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header.js";
import Body from "./components/body.js";
import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';

//React component
//class based component-OLD way of writing components
//functional component-NEW way of writing components

//react fucntional component






const AppLayout=()=>{
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}
 
const appRouter=createBrowserRouter([
    { path: '/',
      element:<AppLayout />,
      children:[
        {
            path:"/",
            element:<Body />,
        },
        {
            path:'/about',
            element:<About />,
            errorElement:<Error />
        },
        {
            path:'/contact',
            element:<Contact />,
            errorElement:<Error />
        }
      ],
      errorElement:<Error /> 
    },
    
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); //this is  how  you render a functional component inside react