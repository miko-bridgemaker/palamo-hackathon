import React from 'react'

const Ruler = ({ width, height}) => {
        

    return (
        <div className='ruler' id='ruler'>
             <div className='ruler-width'>
                <div className='width-left'></div>
                <div>{width} mm</div>
                <div className='width-right'></div>
             </div>
             <div className='ruler-height'>
                <div className='height-top'></div>   
                <div>{height} mm</div>
                <div className='height-bottom'></div>
             </div>
        </div>
    )
}

export default Ruler
