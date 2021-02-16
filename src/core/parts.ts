export interface Part {
  name: string;
}

export class Circuit {
  parts: [Part];

  constructor() {
    this.parts = [];
  }

  addPart(part: Part) {
    this.parts.push(part);
  }

  getCircuitTree() {

  }
}

export interface Tree {


}

export interface Resistance extends Part {
  name: string;
  a: string;
  b: string;
  num: number;
}

export interface VoltageSource extends Part {
  name: string;
  a: string;
  b: string;
  num: number;
}
