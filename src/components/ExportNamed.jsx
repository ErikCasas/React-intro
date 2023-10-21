/*
Recordando que un componente es una función que retorna un HTML,
nos enfocamos en el comportamiento de export named, viendo sus
diferencias al importarlo de forma distinta que con un export default
*/

export const ExportNamed = () => {
  return (
    <div>
        <h1>Este componente es exportado por named</h1>
    </div>
  )
}

