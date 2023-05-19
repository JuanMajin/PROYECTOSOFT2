import React from 'react';

function App() {
  const sumar = (a, b) => {
    return a + b;
  };

  return (
    <div>
      <h1>Prueba de caja blanca</h1>
      <p>El resultado de la suma es: {sumar(2, 3)}</p>
    </div>
  );
}

export default App;