import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Logo from '../../assets/img/Logo.png';
import ButtonStyled from '../ButtonStyled';


function Menu() {
    return (
        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={Logo} alt="Bragaflix logo" />
            </Link>

            <ButtonStyled as={Link} className='ButtonLink' to='/cadastro/video'>Novo vídeo</ButtonStyled>


        </nav>
    );
};

export default Menu;