import './App.scss';
import Footer from './components/Footer/Footer.js'
import Header from './components/header/header';
import Scene from './components/Scene/Scene.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="configurator">
        <div></div>
        <div className="configurator-options">

        </div>
      </div>
      <Scene />
      <Footer />
    </div>
  );
}

export default App;
