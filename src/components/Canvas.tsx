import React, { useState, useEffect }  from 'react';
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

  useEffect(() => {
    const rect = findDOMNode(this).getBoundingClientRect();
    console.log(rect.left + window.pageXOffset); // x座標(絶対座標)
    console.log(rect.top + window.pageYOffset); // y座標(絶対座標)
  });

  const myRef = React.createRef();

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [target, setTarget] = useState(null);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  // const onMouseMove = (e: any) {
  //   if (isMouseDown == true) {
  //     target.x.baseVal.value = e.clientX - drag.offsetx;
  //     target.y.baseVal.value = e.clientY - drag.offsety;
  //   }
  // }

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
            ref={myRef}
          >
            <g transform="scale(0.1 0.1)">
              <ResistanceShape x={0} y={0} />
              <CapacitorShape x={100} y={0}/>
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
};

const ResistanceShape = ({x, y}: ResistanceShapeProps) => {
  return (
    <g transform={`translate(${x},${y})`} stroke="black" stroke-width={1} fill="none">
      <polyline points="0 10, 15 10, 20 0, 30 20, 40 0, 50 20, 60 0, 70 20, 75 10, 85 10" />
    </g>
  );
}

type CapacitorShapeProps = {
  x: number;
  y: number;
};

const CapacitorShape = ({x, y}: CapacitorShapeProps) => {
  return (
    <g transform={`translate(${x},${y})`} stroke="black" stroke-width={1} fill="none">
      <polyline points="0 10, 15 10" />
      <polyline points="25 10, 40 10" />
      <polyline points="15 0, 15 20" />
      <polyline points="25 0, 25 20" />
    </g>
  );
}

export default Canvas;
