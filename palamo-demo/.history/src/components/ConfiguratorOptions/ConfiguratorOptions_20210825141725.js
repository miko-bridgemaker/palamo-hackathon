import React, { useState } from 'react';

const ConfiguratorOptions = ({ updateMaterialHandler }) => {
  function updateMaterial (material) {
    console.log('updateMaterial:', material);
    updateMaterialHandler(material);
  }

  return (
    <article className="ConfiguratorOptions">
      <section className="ConfiguratorOptions-Size">
        <span className="ConfiguratorOptions-title">Material</span>
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
          <div className="ConfiguratorOptions-item" onClick={updateMaterial.bind(this, '#FFF7EA')}>
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
