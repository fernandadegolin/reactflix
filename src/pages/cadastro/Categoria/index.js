import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';


function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['teste']);
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');

  function teste() {

  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria}  </h1>

      <form onSubmit={function handleSubmit(infosDosEvento) {
        infosDosEvento.preventDefault();
        setCategorias([
          ...categorias,
          nomeDaCategoria
        ]);
      }}>


        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeDaCategoria}
            onChange={function teste(infosDosEvento) {
              setNomeDaCategoria(infosDosEvento.target.value);
            }}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para a Home
        </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;