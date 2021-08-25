import React from 'react';
import { Input } from 'antd';

const ConfiguratorOptions = ({ updateMaterialHandler, updateHeightHandler, updateWidthHandler, updateShapeHandler }) => {
  function updateMaterial (material) {
    updateMaterialHandler(material);
  }

  function updateHeight (e) {
    updateHeightHandler(parseInt(e.target.value));
  }

  function updateWidth (e) {
    updateWidthHandler(parseInt(e.target.value));
  }

  function updateShape (e) {
    updateShapeHandler(parseInt(e.target.value));
  }

  return (
    <article className="ConfiguratorOptions">
      <section className="ConfiguratorOptions-Shape">
        <div className="ConfiguratorOptions-shape-container">
          <div className="ConfiguratorOptions-shape-container-item" onClick={updateShape.bind(this, '')}>
            <div className="ConfiguratorOptions-shape-container-item-shape ConfiguratorOptions-shape-container-item-rectangular"></div>
            <span className="ConfiguratorOptions-item-title">rectangular</span>
          </div>
          <div className="ConfiguratorOptions-shape-container-item" onClick={updateShape.bind(this, '')}>
            <div className="ConfiguratorOptions-shape-container-item-shape ConfiguratorOptions-shape-container-item-square"></div>
            <span className="ConfiguratorOptions-item-title">square</span>
          </div>
          <div className="ConfiguratorOptions-shape-container-item" onClick={updateShape.bind(this, '')}>
            <div className="ConfiguratorOptions-shape-container-item-shape ConfiguratorOptions-shape-container-item-circle"></div>
            <span className="ConfiguratorOptions-item-title">circle</span>
          </div>
        </div>
      </section>
      <section className="ConfiguratorOptions-Size">
        <span className="ConfiguratorOptions-title">Size</span>
        <div className="ConfiguratorOptions-size-container">
          <div className="ConfiguratorOptions-size-input-container">
            <label>Height:</label>
            <label>Width:</label>
          </div>
          <div className="ConfiguratorOptions-size-input-container">
            <Input defaultValue={50} onChange={updateHeight} />
            <Input defaultValue={50} onChange={updateWidth}/>
          </div>
          <div className="ConfiguratorOptions-size-input-container">

          </div>
        </div>
      </section>
      <section className="ConfiguratorOptions-Material">
        <span className="ConfiguratorOptions-title">Material</span>
        <div className="ConfiguratorOptions-item-container">
          <div className="ConfiguratorOptions-item" onClick={updateMaterial.bind(this, '#979797')}>
            <div className="ConfiguratorOptions-item-shape ConfiguratorOptions-item-shape-grey"></div>
            <span className="ConfiguratorOptions-item-title"  data-material="1">Grey</span>
          </div>
          <div className="ConfiguratorOptions-item" onClick={updateMaterial.bind(this, '#F7F0F0')}>
            <div className="ConfiguratorOptions-item-shape ConfiguratorOptions-item-shape-beige"></div>
            <span className="ConfiguratorOptions-item-title" data-material="2">Beige</span>
          </div>
          <div className="ConfiguratorOptions-item" onClick={updateMaterial.bind(this, '#D7C2A3')}>
            <div className="ConfiguratorOptions-item-shape ConfiguratorOptions-item-shape-darkYellow"></div>
            <span className="ConfiguratorOptions-item-title" data-material="3">Dark Yellow</span>
          </div>
        </div>
        <div className="ConfiguratorOptions-item-container">
          <div className="ConfiguratorOptions-item" onClick={updateMaterial.bind(this, 'linear-gradient(180deg, #D8D8D8 0%, #FFFFFF 23.83%, #F8F7F6 39.45%, #D8D8D8 59.76%, #FFFFFF 75.91%, #BABABA 91.54%)')}>
            <div className="ConfiguratorOptions-item-shape ConfiguratorOptions-item-shape-wave"></div>
            <span className="ConfiguratorOptions-item-title" data-material="4">Wave</span>
          </div>
          <div className="ConfiguratorOptions-item" onClick={updateMaterial.bind(this, '#FFF7EA')}>
            <div className="ConfiguratorOptions-item-shape ConfiguratorOptions-item-shape-yellow"></div>
            <span className="ConfiguratorOptions-item-title" data-material="5">Yellow</span>
          </div>
          <div className="ConfiguratorOptions-item" onClick={updateMaterial.bind(this, '#BFBFBF')}>
            <div className="ConfiguratorOptions-item-shape ConfiguratorOptions-item-shape-lightGrey"></div>
            <span className="ConfiguratorOptions-item-title" data-material="6">Light grey</span>
          </div>
        </div>
      </section>

      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
      <p>other options</p>
    </article>
  );
}

export default ConfiguratorOptions;
