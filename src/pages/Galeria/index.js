/* eslint-disable no-console */
import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import Fotos from '../../components/Galeria';
import PageDefault from '../../components/PageDefault';

function Galeria() {
  return (
    <PageDefault>
      <SimpleReactLightbox>
        <Fotos />
      </SimpleReactLightbox>
    </PageDefault>
  );
}

export default Galeria;
