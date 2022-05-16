import logo from './logo_servinet.jpeg';
import './App.css';

import CompMostrarDocumentos from './CargarDocumentacion/mostrarDocumentos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CompMostrarDocumentos></CompMostrarDocumentos>
    </div>
  );
}

export default App;
