import styled from 'styled-components';
import bg from '../../assets/galeria/DSC00965-69.jpg'

export const Fotos = styled.h1`
  /* color: var(--white);
  text-align: center;
   */
`;

export const BannerMe = styled.section`
  height: 100vh;
  position: relative;
  color: #fff;
  background: url(${bg});
  background-size: cover;
  opacity: 0.15;

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }
`;