import React from 'react';
import ReactDOM from 'react-dom/client';

//React component
//class based component-OLD way of writing components
//functional component-NEW way of writing components

//react fucntional component

const Header=()=>{
    return(
         <div className='header'>
            <div className='Logo-Container'>
                <img className="logo" src='https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats.png' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>

         </div>
    )
};
const styleCard={   //js object
    backgroundColor:"#f0f0f0"
};
const RestaurantCard=()=>{
    return(
        <div className='res-card' style={styleCard}>
            <h3>MegnaFoods</h3>
        </div>
    )
}
const Body=()=>{
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard />
            </div>
        </div>
    )
}
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