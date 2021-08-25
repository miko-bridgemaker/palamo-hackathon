import React, { useState } from 'react';

const ConfiguratorOptions = ({ updateMaterialHandler }) => {
  function updateMaterial (material) {
    console.log('updateMaterial:', material);
    updateMaterialHandler(material);
  }

  return (
    <article className="ConfiguratorOptions">
      <section className="ConfiguratorOptions-Material">
        <span className="ConfiguratorOptions-title">Material</span>
        <div className="ConfiguratorOptions-item-container">
          <div className="ConfiguratorOptions-item" onClick={updateMaterial.bind(this, '#979797')}>
            <div className="ConfiguratorOptions-item-shape ConfiguratorOptions-item-shape-grey"></div>
            <span className="ConfiguratorOptions-item-title"  data-material="1">Grey</span>
          </div>
          <div className="ConfiguratorOptions-item" onClick={updateMaterial.bind(this, '2')}>
            <div className="ConfiguratorOptions-item-shape ConfiguratorOptions-item-shape-beige"></div>
            <span className="ConfiguratorOptions-item-title" data-material="2">Beige</span>
          </div>
          <div className="ConfiguratorOptions-item" onClick={updateMaterial.bind(this, '3')}>
            <div className="ConfiguratorOptions-item-shape ConfiguratorOptions-item-shape-darkYellow"></div>
            <span className="ConfiguratorOptions-item-title" data-material="3">Dark Yellow</span>
          </div>
        </div>
        <div className="ConfiguratorOptions-item-container">
          <div className="ConfiguratorOptions-item" onClick={updateMaterial.bind(this, '4')}>
            <div className="ConfiguratorOptions-item-shape ConfiguratorOptions-item-shape-wave"></div>
            <span className="ConfiguratorOptions-item-title" data-material="4">Wave</span>
          </div>
          <div className="ConfiguratorOptions-item" onClick={updateMaterial.bind(this, '5')}>
            <div className="ConfiguratorOptions-item-shape ConfiguratorOptions-item-shape-yellow"></div>
            <span className="ConfiguratorOptions-item-title" data-material="5">Yellow</span>
          </div>
          <div className="ConfiguratorOptions-item" onClick={updateMaterial.bind(this, '6')}>
            <div className="ConfiguratorOptions-item-shape ConfiguratorOptions-item-shape-lightGrey"></div>
            <span className="ConfiguratorOptions-item-title" data-material="6">Light grey</span>
          </div>
        </div>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </section>
    </article>
  );
}

export default ConfiguratorOptions;
