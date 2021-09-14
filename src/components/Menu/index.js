import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Fe from '../../assets/img/fe.png';
import './Menu.css';
// import Button from '../Button';
// import ButtonLink from './components/ButtonLinks';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Fe" src={Fe} alt="logo da Fernanda Degolin" />
        {/* <img className="Logo" src={Logo} alt="logo da Fernanda Degolin" /> */}
      </Link>
        <p className="Title">Fernanda Degolin</p>
{/* 
      <div className="Navegação">
        <ul>
          <a href="https://www.instagram.com/" target="_blank">
            {' '}
            <li>Quem sou</li>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <li>Fotos</li>
            {' '}
          </a>
        </ul>
      </div> */}

      {/* Desabilitei o botão novo vídeo */}

      {/* {<Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>} */}
    </nav>
  );
}

export default Menu;
