import './App.scss';
import Footer from './components/Footer/Footer.js'
import Header from './components/header/header';
import Scene from './components/Scene/Scene.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Scene />
      <Footer />
    </div>
  );
}

export default App;
