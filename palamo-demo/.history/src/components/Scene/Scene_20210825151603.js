import { useState, useEffect } from 'react';
import ConfiguratorOptions from '../ConfiguratorOptions/ConfiguratorOptions';

const Scene = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  function collectState() {
    return totalPrice;
  }

  let handleChange = (ele) => {
    setTotalPrice(ele.target.value);
    props.getChildChange(collectState());
  }

  handleChange = handleChange.bind(this);
  useEffect(() => {
   props.getChildChange(collectState());
}, [totalPrice]);

  //calculate mm to pixels
  const mmToPx = (e) => {
    return e*3.7795275591;
  }
    const [canvasWidth, setCanvasWidth] = useState(200);
    const [canvasHeight, setCanvasHeight] = useState(200);
    const [canvasRadius, setCanvasRadius] = useState(0);
    const [material, setMaterial] = useState();
    const [varnish, setVarnish] = useState();
    const handleCanvas = () =>{
        document.getElementById('canvas').style.width = `${mmToPx(canvasWidth)}px`;
        document.getElementById('canvas').style.height = `${mmToPx(canvasHeight)}px`;
        document.getElementById('canvas').style.borderRadius = `${canvasRadius}px`;
        document.getElementById('material').style.width = `${mmToPx(canvasWidth)}px`;
        document.getElementById('material').style.height = `${mmToPx(canvasHeight)}px`;
        document.getElementById('material').style.borderRadius = `${canvasRadius}px`;
        document.getElementById('label').style.width = `${mmToPx(canvasWidth)}px`;
        document.getElementById('label').style.height = `${mmToPx(canvasHeight)}px`;
        document.getElementById('label').style.borderRadius = `${canvasRadius}px`;
      };

    const handleMaterial = () =>{
      document.getElementById('material').style.background = `${material}`;
    }

    const handleVarnish = () => {
        if (varnish==0){
          var img = document.querySelector('#myImg');
          img.classList.remove('matte');
          img.classList.add('shiny');
        }
        else {
          var img = document.querySelector('#myImg');
          img.classList.remove('shiny');
          img.classList.add('matte');
        }
    }

    const roundCanvas = (x) => {
      setCanvasRadius(x);
    }

    const setBgMaterial = (x) => {
      setMaterial(x);
    }

    const finishing = (x) => {
        setVarnish(x);
    }

    function updateMaterial(material) {
      setMaterial(material);
    }

    useEffect(() => {
      handleMaterial();
      handleCanvas();
    }, [material, canvasWidth, canvasHeight, handleMaterial, handleCanvas]);

    function updateHeight(height) {
      setCanvasHeight(height)
    }

    function updateWidth(width) {
      setCanvasWidth(width)
    }

    window.addEventListener('load', function() {
      document.querySelector('input[type="file"]').addEventListener('change', function() {
          if (this.files && this.files[0]) {
              var img = document.querySelector('#myImg');
              img.style.visibility = 'visible';
              handleCanvas();
              img.onload = () => {
                  URL.revokeObjectURL(img.src);  // no longer needed, free memory
              }

              img.src = URL.createObjectURL(this.files[0]); // set src to blob url
          }
      });
    });

    return (
      <div className="scene">
        <div className='app-scene'>
            <div className='canvas' id='canvas'></div>
            <div className='background-material' id='material'></div>
            <div className='user-img' id='label'><img id="myImg" src="#"></img></div>
            {canvasHeight}px/{canvasWidth}px
            <button onClick={() => setCanvasHeight(canvasHeight+100)}>+ height</button>
            <button onClick={() => setCanvasWidth(canvasWidth+100)}>+ width</button>
            <button onClick={() => roundCanvas(9999)}>Make it round</button>
            <button onClick={() => roundCanvas(0)}>Make it square</button>

            <button onClick={() => handleCanvas()}>Update canvas</button>
            <br></br>

            <button onClick={() => setBgMaterial('blue')}>Blue material</button>
            <button onClick={() => setBgMaterial('red')}>Red material</button>

            <button onClick={() => (handleMaterial(), handleCanvas())}>Update material</button>
            <br></br>
            <input type='file' />
            <br />
            <button onClick={() => finishing(0)}>Make it shiny</button>
            <button onClick={() => finishing(1)}>Make it matte</button>
            <button onClick={() => (handleMaterial(), handleCanvas(), handleVarnish())}>Update varnish</button>
            <br />
            <input onChange={handleChange} type='number' value={totalPrice}></input>
        </div>
        <ConfiguratorOptions updateMaterialHandler={updateMaterial} updateHeightHandler={updateHeight} updateWidthHandler={updateWidth} />
      </div>
    )
}

export default Scene
