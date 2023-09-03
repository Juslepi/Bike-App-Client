export interface Journey {
  _id: string;
  ["Covered distance"]: number;
  Departure: Date;
  ["Departure station id"]: number;
  ["Departure station name"]: string;
  Return: Date;
  ["Return station id"]: number;
  ["Return station name"]: string;
}

export interface Station {
  _id: string;
  ID: number;
  Name: string;
  Address: string;
  Capacity: number;
  X: number;
  Y: number;
  Returns: number;
  Departures: number;
  ["Average departure length"]: number;
  ["Average return length"]: number;
}
