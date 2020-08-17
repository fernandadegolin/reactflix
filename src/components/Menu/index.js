import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
//import Button from '../Button';
//import ButtonLink from './components/ButtonLinks';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="logo da Fernanda Degolin"/>
      </Link>

      {/* Desabilitei o botão novo vídeo */}

      {/* {<Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>} */}
    </nav>
  );
}

export default Menu;