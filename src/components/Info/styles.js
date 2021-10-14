import styled from 'styled-components';
// import bg from '../../assets/galeria/pic1.webp';

export const Section = styled.div`
  padding: 0 12rem;

  p{
    text-align: justify;
    line-height: 23px;
  }

  img{
    filter: invert(1);
    width: auto;
    height: 4vh;
    display: flex;
    margin-left: auto;

      &:hover,
      &:focus {
      /* opacity: .5; */
      filter: contrast(0.5);
    }
  }

  @media (max-width: 1039px) {
    padding: inherit;
  }
`;

export const BannerMe = styled.section`
    height: 43vh;
    max-width: 100vw;
    background-position-y: -97px!important;
    /* position: absolute; */
    color: #fff;
    background: url(/static/media/pic3.419253ea.webp) center;
    background-size: cover;
    opacity: 0.45;

  @media (max-width: 1039px) {
    max-width: 100vw;
      height: 50vh;
      background-position-y: inherit!important;
  }
`;

export const Title = styled.div`
 

  h1 {
    margin-bottom: 0;

    span{
      font-size:14px;
    }
  }

  p{
    margin: 0;
  } 

  @media (max-width: 1039px) {
    margin: auto;
  }

`;

export const Infos = styled.p`
  text-align: justify;

 
`;
