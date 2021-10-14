import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import Foto1 from '../../assets/galeria/pic1.webp';
import Foto2 from '../../assets/galeria/pic3.webp';
import Foto3 from '../../assets/galeria/pic22.webp';
import Foto4 from '../../assets/galeria/pic5.webp';
import Foto5 from '../../assets/galeria/pic23.webp';
import Foto6 from '../../assets/galeria/pic7.webp';
import Foto7 from '../../assets/galeria/pic11.webp';
import Foto8 from '../../assets/galeria/pic13.webp';
import Foto9 from '../../assets/galeria/pic12.webp';
import Foto10 from '../../assets/galeria/pic10.webp';
import Foto11 from '../../assets/galeria/pic15.webp';
import Foto12 from '../../assets/galeria/pic8.webp';
import Foto13 from '../../assets/galeria/pic9.webp';
import Foto14 from '../../assets/galeria/pic16.webp';
import Foto15 from '../../assets/galeria/pic20.webp';
import Foto16 from '../../assets/galeria/pic25.webp';
import {
  Content, ImageHalf, ImageSmall, Row, Return
} from './styles';
import { Link } from 'react-router-dom';
import Voltar from '../../assets/img/seta.png';

function Fotos() {
  return (
   
      <Content className="content">
        <Row>

          <ImageSmall
            srl_gallery_image="true"
            src={Foto1}
            alt=""
          />

          <ImageSmall
            srl_gallery_image="true"
            src={Foto2}
            alt=""
          />

          <ImageSmall
            srl_gallery_image="true"
            src={Foto3}
            alt=""
          />

        </Row>

        <Row>

          <ImageHalf
            srl_gallery_image="true"
            src={Foto4}
            alt=""
          />

          <ImageHalf
            srl_gallery_image="true"
            src={Foto5}
            alt=""
          />

        </Row>

        <Row>

          <ImageSmall
            srl_gallery_image="true"
            src={Foto6}
            alt=""
          />

          <ImageSmall
            srl_gallery_image="true"
            src={Foto7}
            alt=""
          />

          <ImageSmall
            srl_gallery_image="true"
            src={Foto8}
            alt=""
          />
        </Row>

        <Row>

          <ImageHalf
            srl_gallery_image="true"
            src={Foto9}
            alt=""
          />

          <ImageHalf
            srl_gallery_image="true"
            src={Foto13}
            alt=""
          />

        </Row>

        <Row>

          <ImageSmall
            srl_gallery_image="true"
            src={Foto10}
            alt=""
          />

          <ImageSmall
            srl_gallery_image="true"
            src={Foto11}
            alt=""
          />

          <ImageSmall
            srl_gallery_image="true"
            src={Foto12}
            alt=""
          />

        </Row>

        <Row>

          <ImageSmall
            srl_gallery_image="true"
            src={Foto14}
            alt=""
          />

          <ImageSmall
            srl_gallery_image="true"
            src={Foto15}
            alt=""
          />

          <ImageSmall
            srl_gallery_image="true"
            src={Foto16}
            alt=""
          />

        </Row>
      <Link to="/">
        <Return src={Voltar} alt="voltar" />
      </Link>
      </Content>
   
  );
}

export default Fotos;
