import React  from 'react';
import '../stylesheets/Circus.scss';

import {Resistance, VoltageSource, Circuit} from '../core/parts';

const canvasSize = {width: 100, height: 100};

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
      <section>
        <h1>Circus - A implementation of Circuit Simulator </h1>
      </section>
      <section>
        <h1>Canvas SVG</h1> 
        <div>
          <svg 
            viewBox={`0 0 ${canvasSize.width} ${canvasSize.height}`}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <g transform="scale(0.1 0.1)">
              <ResistanceShape />
            </g>
          </svg>
        </div>
      </section>
    </article>
  );
}

type ResistanceShapeProps = {
  x: number;
  y: number;
  unit: number;
};

const ResistanceShape = () => {
  return (
    <g stroke="black" stroke-width={1} fill="none">
      <polyline points="0 10, 15 10, 20 0, 30 20, 40 0, 50 20, 60 0, 70 20, 75 10, 85 10" />
    </g>
  );


}

export default Canvas;
