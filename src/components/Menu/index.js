import React from 'react';
import './Menu.css';
import Logo from '../../assets/img/Logo.png';
import ButtonStyled from '../ButtonStyled';


function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt="Bragaflix logo" />
            </a>

            <ButtonStyled className='ButtonLink' href='/'>Novo vídeo</ButtonStyled>


        </nav>
    );
};

export default Menu;