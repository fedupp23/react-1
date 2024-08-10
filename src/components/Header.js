import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

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
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>Services</li>
                    <li><Link to='/contact'>Contact</Link></li>
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