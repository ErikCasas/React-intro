/*
Recordando que un componente es una función que retorna un HTML,
nos enfocamos en el comportamiento de export default, viendo sus
diferencias al importarlo de forma distinta que con un export named
*/

const ExportDefault = () => {
  return (
    <div>
      <h1>Este componente es exportado por default</h1>
    </div>
  )
}

export default ExportDefault