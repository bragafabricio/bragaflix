import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormFields from '../../../components/FormFields';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  function setValue(chave, valor) {
    setValues( {
      ...values,
      [chave]: valor
    })
  }
  

  function handleChange (inputText){
    const { name, value} = inputText.target;
    setValue(
      name,
      value
      );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={ function handleSubmit(eventSubmitForm){
        eventSubmitForm.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais)
      }}>

        <FormFields
          label='Nome da Categoria'
          type='text'
          name='nome' 
          value={values.nome}
          onChange={handleChange}
        />
        

        <FormFields
          label='Descrição'
          type='text'
          name='nome' 
          value={values.descricao} 
          onChange={handleChange}
        />
        
        <FormFields
        label='Cor'
          type='color'
          name='cor' 
          value={values.cor}
          onChange={handleChange}
        />
       
        
        <button>
          Cadastrar
        </button>
      </form>
      
      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`$categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
      <Link to='/'>
        Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;