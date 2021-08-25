import './App.scss';
import Footer from './components/Footer/Footer.js'
import Header from './components/header/header';
import Scene from './components/Scene/Scene.js';
import { React , useState, useEffect } from 'react';

function App() {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {   
    setTotalPrice(totalPrice);
    console.log(totalPrice);
}, [getChildChange]);

  getChildChange = getChildChange.bind(this);
  function getChildChange(value) {
    setTotalPrice(value);
  }
  return (
    <div className="App">
              {/* <button onClick={() => (setPrice(200))} className='testButton' >+ price</button> */}
      <Header/>
      <Scene getChildChange={getChildChange}/>
      <Footer price={totalPrice}/>
    </div>
  );
}

export default App;
