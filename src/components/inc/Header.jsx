import React,{useState} from 'react'
import './Header.css'
import HeaderItems from "./HeaderItems";
import {NavLink} from "react-router-dom";


const Header = () => {
    let items = HeaderItems.map(({title,url} , index)=>{
        return (
            <> 
            <li>
                <NavLink to={url} key={index} >{title}</NavLink>
            </li>
            </>
        )
    });

    let[clicked,setClicked]=useState(false);
    function handleClick()
    {
        setClicked(!clicked);
    }


    return (
        <>
        <nav>
        <NavLink to="/" className="logo">
            <div className="logo">
                Movers<font>.com</font>
            </div>
        </NavLink>
            <div className="menu_icon" onClick={handleClick}>
                <i class={clicked?"fas fa-times":"fas fa-bars"}></i>
            </div>
            <ul className={clicked?"header_items":"header_items close"}>
                {items}
            </ul>
        </nav>
        </>
    )
}
// 
export default Header;