import React, { useState } from 'react';
import '../stylesheets/Circus.scss';

import {Resistance, VoltageSource, Circuit} from '../core/parts';

const margin = {top: 0, left: 0};
const canvasSize = {width: 50, height: 50};

function generateCircuit() {
  const c = new Circuit();
  const r1 = new Resistance("R1", "0", "1", 1000);
  const v1 = new VoltageSource("V1", "0", "1", 5);
  c.addPart(r1);
  c.addPart(v1);

  c.getCircuitTree();
}

const Canvas = () => {
  return (
    <article className="Canvas">
      <section className="Canvas_title">
        <h1>Circus - A implementation of Circuit Simulator </h1>
      </section>
      <section>
        <h1 className="Canvas_elementTitle">Canvas SVG</h1> 
        <div className="Canvas_elementChart">
          <svg 
            viewBox={`0 0 ${canvasSize.width} ${canvasSize.height}`}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
          </svg>
        </div>
      </section>
    </article>
  );
}

export default Canvas;
