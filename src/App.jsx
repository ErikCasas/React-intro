import "./App.css";
//para importar este compo, solo necesitamos darle la ruta en donde esta siendo exportado 
import ExportDefault from "./components/ExportDefault";
//al ser export named, nececsitamos de las llaves {} y el nombre exacto 
import { ExportNamed } from "./components/ExportNamed";

/*
  Este es el componente App.jsx es el segundo punto mas alto de nuestro
  proyecto, el punto mas alto es el archivo main.jsx pero ese es mejor no tocarlo.
  Es aquí en donde realizaremos el punto encuentro de todo nuestro código.
  
  Un componente funcional en resumidas palabras es un función cuyo nombre inicia 
  con una letra mayuscula y retorna algo visible en pantalla (HTML).
  Cuidado, debe retornar un unico elemento:
  
  function Compo(){
    return(<h1>Hola mundo</h1>)
  }

  function Compo(){
  return(
    <div>
      <h1>Hola mundo</h1>
      <h2>Espero esten bien <h2/>
    <div/>
    )
  }

  EJEMPLO DE COMO NO DEBE SER UN COMPONENTE

      function Compo(){
    return(
        <h1>Hola mundo</h1>
        <h2>Espero esten bien <h2/>
      )
  }
  
  */
function App() {
  return (
    <>
      <h1>Primeros pasos con React</h1>
{/* Una vez tenemos importados los componentes, se usan como etiquetas HTML */}
      <ExportDefault />
      <ExportNamed />
    </>
  );
}

export default App;
