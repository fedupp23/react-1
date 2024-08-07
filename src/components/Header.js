import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

const Header=()=>{
    const [btnNameReact,setBtnNameReact]=useState("Login");
    return(
         <div className='header'>
            <div className='Logo-Container'>
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <button className="Login" onClick={()=>{
                        btnNameReact==="Login"?
                        setBtnNameReact('Logout'):
                        setBtnNameReact('Login')
                    }}
                        
                        >{btnNameReact}</button>
                </ul>
            </div>

         </div>
    )
};

export default Header;