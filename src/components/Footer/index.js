import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';


function Footer() {
  return (
    <FooterBase>
      <a href="https://fernandadegolin.github.io/fernandadegolin/" target="_blank">
        <img className="Logo" src={Logo} alt="Logo Alura" />
      </a>
      <p>
      built by 
        {' '}
        <a href="https://fernandadegolin.github.io/fernandadegolin/" target="_blank">
        Fernanda Degolin - 2020 
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
