import React from 'react';
import { FooterBase, Redes } from './styles';
import Logo from '../../assets/img/fe.png';
import Instagram from '../../assets/img/instagram.png';
import Linkedin from '../../assets/img/linkedin.png';
import Email from '../../assets/img/email.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://fernandadegolin.github.io/fernandadegolin/">
        <img className="Logo" src={Logo} alt="Logo" />
      </a>

      <Redes className="Redes">
        <a href="https://www.instagram.com/fernandadegolin/" target="_blank"><img className="Instagram" src={Instagram} alt="Logo Instagram" /></a>
        <a href="https://www.linkedin.com/in/fernandadegolin/" target="_blank"><img className="Linkedin" src={Linkedin} alt="Logo LinkedIn" /></a>
        <a href="mailto:fernandadegolin@hotmail.com" target="_blank"><img className="Email" src={Email} alt="Logo Email" /></a>
      </Redes>
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
