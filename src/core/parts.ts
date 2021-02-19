export interface Part {
  name: string;
}

export class Circuit {
  parts: Part[];

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

export class Resistance implements Part {
  name: string;
  a: string;
  b: string;
  num: number;

  constructor(name: string, a: string, b: string, num: number) {
    this.name = name;
    this.a = a;
    this.b = b;
    this.num = num;

  }
}

export class VoltageSource implements Part {
  name: string;
  a: string;
  b: string;
  num: number;

  constructor(name: string, a: string, b: string, num: number) {
    this.name = name;
    this.a = a;
    this.b = b;
    this.num = num;

  }
}
