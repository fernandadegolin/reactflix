import React from 'react';
import {
  BannerMe, Infos, Section, Title,
} from './styles.js';
import Voltar from '../../assets/img/seta.png';
import { Link } from 'react-router-dom';

function Info() {
  return (
    <Section>
      <BannerMe />

      <Title>
        <h1>
          Fernanda Degolin

          <span>
            {' '}

            {' '}
            DRT - 34582SP
          </span>
        </h1>
        <p>
          Atriz e diretora
        </p>

      </Title>

      <Infos>
        <p>
          Iniciei meus estudos em atuação em meados de 2001 ainda na minha cidade natal, Mogi Guaçu. Estudei com os professores de atuação e direção da cidade, montei nos anos seguintes uma cia de teatro experimental.
        </p>

        <p>
          Em 2010 finalizei a faculdade de Administração e me mudei para São Paulo para me especializar na área de atuação e direção. Tive contato com renomados nomes do teatro e cinema. Estudei direção e atuação de atores no Instituto Stanislavsky, onde fiz mais de 12 curtas metragens com produções assinadas pela LA Film Institute.
        </p>
      </Infos>
      <p>
        Recentimente, recebi mentoria e estudos com direção de Alexandre Klemperer, diretor de novelas da Globo. Fiz parte do corpo docente da escola Namie Wihby School, ministrando aulas de interpretação para os alunos.
      </p>

      <p>
        Somo nesses anos, mais de 30 espetáculos teatrais ao longo da carreira, incluindo uma breve passagem pelo teatro musical.
      </p>
      <p>
        Hoje trabalho em minha produtora (The Mysterious) como diretora criativa, produzindo vídeos artísticos e criativos, vídeo clipes e curtas metragens.
      </p>
      <Link to="/">
        <img src={Voltar} alt="voltar" />
      </Link>
    </Section>

  );
}

export default Info;
