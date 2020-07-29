import React from 'react';
import Menu from './Components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './Components/BannerMain';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import namexxx from './assets/img/namexxx.jpg' 

function App() {
  return (
        <div style={{ background: "#141414" }}>
             <Menu/>

             <BannerMain 
              videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
              url={dadosIniciais.categorias[0].videos[0].url}
             />

            <Carousel 
             ignoreFirstVideo
             category= {dadosIniciais.categorias[0]}
             /> 
             
             <Carousel 
             
             category= {dadosIniciais.categorias[1]}
             /> 
             <Carousel 
             
             category= {dadosIniciais.categorias[2]}
             />
             <Carousel 
            
             category= {dadosIniciais.categorias[3]}
             />
             <Carousel 
             
             category= {dadosIniciais.categorias[4]}
             />
             <Carousel src={namexxx}
             
             category= {dadosIniciais.categorias[5]}
             />
                          



          <Footer></Footer>

             

            
             
        </div>
    
  );
}

export default App;