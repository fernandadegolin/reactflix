import styled from 'styled-components';
// import bg from '../../assets/galeria/pic1.webp';

export const Fotos = styled.h1`
  /* color: var(--white);
  text-align: center;
   */
`;

export const BannerMe = styled.section`
    height: 39vh;
    width: 26vw;
    position: absolute;
    color: #fff;
    background: url(/static/media/pic1.438444b8.webp) center;
    background-size: cover;
    opacity: 0.45;

  @media (max-width: 800px) {
    position: inherit;
    width: auto;
    height: auto;
    min-height: 50vh;
  }
`;
