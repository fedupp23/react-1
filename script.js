import React from 'react';
import ReactDOM from 'react-dom/client';



//jsx
const heading=(<h1 id="heading">
    namaste reacrusing jsx
</h1>
);
//React component
//class based component-OLD way of writing components
//functional component-NEW way of writing components

//react fucntional component

const HeadinComponent=()=> {
<div id="root1">
<h1>Namaste from functional component</h1>
</div>
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(<HeadinComponent/>); //this is  how  you render a functional component inside react