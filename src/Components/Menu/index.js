import React from 'react';
import Logo from '../../assets/img/Lupa.png';
import './Menu.css';
//import ButtonLink from './Components/ButtonLink/Index';
import Button from '../Button/Index';

function Menu() {
    return (
        <nav className="Menu">
            <a href= "/">
            <img className="Logo"   src= {Logo} alt= "Lupaflix Logo"/>
            </a>
         
         <Button as='a' href="/">
             Novo Video
             

         </Button>
         
        </nav>
    );
}

export default Menu;