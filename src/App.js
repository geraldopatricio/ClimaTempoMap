/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

function App() {
  //state principal
  const [cidade, setcidade] = useState('');
  const [pais, setPais] = useState('');
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    if(cidade === '') return;
    const consultarAPI = async () => {
   
      const appId = '0720188f76903c6fe50931b602a81073';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&APPID=${appId}`;
      const resposta = await fetch(url);
      const resultado = await resposta.json();
      setResultado(resultado);
    }     
      consultarAPI();   
  }, [cidade, pais]);

  const datosConsulta = datos => {
    if(datos.cidade === ''|| datos.pais === ''){
      setError(true);
      return;
    }
    setcidade(datos.cidade);
    setPais(datos.pais);
    setError(false);
  };

  let componente;
  if(error){
      componente = <Error mensagem='Error - Campos Obrigatórios'/>
    } else if (resultado.cod === "404") {
      componente = <Error mensagem="Cidade não encontrada"/>
    } else {
      componente = <Clima resultado = {resultado} />;
    }
  const cuerpoStyle = {
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`
  };
  const footerStyle = {
    backgroundPosition: `bottom`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`
  };
  return (
    <div id="App">
    <Header />
    <div id="divFormulario">
      <div className="col s12 m8 l12">
        <Formulario datosConsulta = {datosConsulta} />
      </div>
      <div className="col s12 m8 l12">
        {componente}
      </div>
    </div>
    </div>  
  
  );
}

export default App;
