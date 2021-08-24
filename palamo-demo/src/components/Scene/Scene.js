import { useState } from 'react';

const Scene = () => {
    const [canvasWidth, setCanvasWidth] = useState(200);
    const [canvasHeight, setCanvasHeight] = useState(200);
    const [canvasRadius, setCanvasRadius] = useState(0);
    const [material, setMaterial] = useState();
    const handleCanvas = () =>{
        document.getElementById('canvas').style.width = `${canvasWidth}px`;
        document.getElementById('canvas').style.height = `${canvasHeight}px`;
        document.getElementById('canvas').style.borderRadius = `${canvasRadius}px`;
        document.getElementById('material').style.width = `${canvasWidth}px`;
        document.getElementById('material').style.height = `${canvasHeight}px`;
        document.getElementById('material').style.borderRadius = `${canvasRadius}px`;
        document.getElementById('label').style.width = `${canvasWidth}px`;
        document.getElementById('label').style.height = `${canvasHeight}px`;
        document.getElementById('label').style.borderRadius = `${canvasRadius}px`;

      };

      const handleMaterial = () =>{
        document.getElementById('material').style.background = `${material}`;
      }

      const roundCanvas = (x) => {
        setCanvasRadius(x);
      }

      const setBgMaterial = (x) => {
        setMaterial(x);
      }

      window.addEventListener('load', function() {
        document.querySelector('input[type="file"]').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img = document.querySelector('img');
                img.onload = () => {
                    URL.revokeObjectURL(img.src);  // no longer needed, free memory
                }
      
                img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            }
        });
      });

    return (
        <div className='app-scene'>
            <div className='canvas' id='canvas'></div>
            <div className='background-material' id='material'></div>
            <div className='user-img' id='label'></div>
            {canvasHeight}px/{canvasWidth}px
            <button onClick={() => setCanvasHeight(canvasHeight+100)}>+ height</button>
            <button onClick={() => setCanvasWidth(canvasWidth+100)}>+ width</button>
            <button onClick={() => roundCanvas(9999)}>Make it round</button>
            <button onClick={() => roundCanvas(0)}>Make it square</button>

            <button onClick={() => handleCanvas()}>Update canvas</button>
            <br></br>

            <button onClick={() => setBgMaterial('blue')}>Blue material</button>
            <button onClick={() => setBgMaterial('red')}>Red material</button>

            <button onClick={() => handleMaterial()}>Update material</button>
            <br></br>
            
            
        </div>
    )
}

export default Scene
