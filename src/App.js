import '../src/index.css';

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Games from './components/Games.jsx'
import Categorias from './components/Categorias.jsx'


function App() {
  return (
    <div className="App">

      <Header />
<br />
      <Home />

    <br />
    <Games />
<br />
<Categorias/>

    </div>
  );
}

export default App;
