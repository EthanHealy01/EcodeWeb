import React from "react";
import './nav.css'
import { json, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
    const navigate = useNavigate();
    const currentPath = window.location.href;

    return (
        
        <div className="navbar">
            <div style={{backgroundColor:'green', width:'50px', height:'50px', marginLeft:'15px'}}/>
            <Button className={(currentPath.includes('about') || currentPath.includes('contactUs') || currentPath.includes('product')) ? 'navbarItemsDefault' : 'navbarItemsActive'} style={{marginLeft:'auto'}} onClick={()=>navigate('/')}>Home</Button>
            <Button className={currentPath.includes('about') ? 'navbarItemsActive' : 'navbarItemsDefault'} onClick={()=>navigate('/about')}>About</Button>
            <Button className={currentPath.includes('contactUs') ? 'navbarItemsActive' : 'navbarItemsDefault'} onClick={()=>navigate('/contactUs')}>Contact Us</Button>
            <Button className={currentPath.includes('product') ?  'navbarItemsActive' :'navbarItemsDefault'} onClick={()=>navigate('/product/1234')}>Product</Button>
        </div>

    );
}
export default Navbar;