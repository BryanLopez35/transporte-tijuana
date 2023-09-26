import React from 'react';
import './App.css'; // Asegúrate de tener un archivo CSS para estilizar la página

function App() {
  return (
    <div className="landing-page">
      <div className="background-image">
        {/* Aquí coloca la URL de tu imagen de fondo */}
        {/* Ajusta las propiedades de estilo según tus necesidades */}
        <img
          src="src/img/tijuana.jpg"
          alt="Tijuana"
          className="background-image"
        />
      </div>
      <div className="search-container">
        <h1>Bienvenido a nuestra página</h1>
        <p>Encuentra lo que necesitas</p>
        {/* Aquí puedes colocar tu componente de búsqueda */}
        {/* Por ejemplo, un input de búsqueda */}
        <input
          type="text"
          placeholder="Buscar..."
          className="search-input"
        />
      </div>
    </div>
  );
}


export default App;
