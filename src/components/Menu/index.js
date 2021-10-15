import React from 'react';
import { Link } from 'react-router-dom';

import Fe from '../../assets/img/fe.png';
import './Menu.css';
// import Button from '../Button';
// import ButtonLink from './components/ButtonLinks';

function Menu() {
  return (
    <>
      <nav className="Menu">
        <Link to="/">
          <img className="Fe" src={Fe} alt="logo da Fernanda Degolin" />
          {/* <img className="Logo" src={Logo} alt="logo da Fernanda Degolin" /> */}
        </Link>
        <Link to="/info">
          <p className="Title">Fernanda Degolin</p>
        </Link>
      </nav>

      <div className="SubMenu">
        <Link to="/info">
          <p className="SubTitle">Quem sou</p>
        </Link>
        <p className="SubTitle">{' '}</p>
        <Link to="/galeria">
          <p className="SubTitle">Galeria</p>
        </Link>
      </div>
    </>
  );
}

export default Menu;
