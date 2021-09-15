import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  /* border-top: 2px solid var(--primary); */
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  
  p {
    font-size: 12px;
  }

  .Logo{
    display:none;
    @media (max-width: 375px) {
    display: block;
    margin: auto;
      }
  }
`;

export const Redes = styled.div`
img {
  filter: invert(1);
  width: 2.8vw;
  margin: 18px;
  transition: opacity 13s;
  &:hover,
  &:focus {
    /* opacity: .5; */
    filter: none;
  }


  @media (max-width: 375px) {
    width: 7vw;
      }
}
`;
