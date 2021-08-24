import { useState } from 'react';
import { ConfiguratorOptions } from '../ConfiguratorOptions/ConfiguratorOptions';

const Scene = () => {
    const [canvasWidth, setCanvasWidth] = useState(200);
    const [canvasHeight, setCanvasHeight] = useState(200);
    const [canvasRadius, setCanvasRadius] = useState(0);
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

      const roundCanvas = (x) => {
        setCanvasRadius(x);
      }

    return (
      <div>
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

        </div>

        <div>

        </div>
      </div>
    )
}

export default Scene
