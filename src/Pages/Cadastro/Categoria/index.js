import React from 'react';
import PageDefault from '../../../Components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroCategoria(){
    return(
    
    <PageDefault>      
        <h1>Cadastro de Video </h1>
    
    <Link to="/" >
      Ir para Home    
    </Link>

      </PageDefault>
    )
  }

  export default CadastroCategoria;