import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header.js";
import Body from "./components/body.js";
//React component
//class based component-OLD way of writing components
//functional component-NEW way of writing components

//react fucntional component






const AppLayout=()=>{
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //this is  how  you render a functional component inside react