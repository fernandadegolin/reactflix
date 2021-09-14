import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/fe.png';


function Footer() {
  return (
    <FooterBase>
      <a href="https://fernandadegolin.github.io/fernandadegolin/">
        <img className="Logo" src={Logo} alt="Logo" />
      </a>
      <p>
      built by 
        {' '}
        <a href="https://fernandadegolin.github.io/fernandadegolin/">
        Fernanda Degolin - 2021 
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
