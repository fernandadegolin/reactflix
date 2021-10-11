import styled from 'styled-components';

export const Content = styled.div`


`;
export const Row = styled.div`
  display: flex;
  
  /* padding: 17px; */

  @media (max-width: 800px) {
    flex-direction: column;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageSmall = styled.img`
  max-width: 30vw;
  object-fit: cover;
  height: auto;
  cursor: pointer;
  /* margin: 0 18px;   */

  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

export const ImageHalf = styled.img`
  max-width: 45vw;
  object-fit: cover;
  height: auto;
  cursor: pointer;

  @media (max-width: 800px) {
    max-width: 100%;
  }
`;
