export interface Journey {
    _id: string,
    ["Covered distance"]: number;
    Departure: Date,
    ["Departure station id"]: number,
    ["Departure station name"]: string,
    Return: Date,
    ["Return station id"]: number,
    ["Return station name"]: string,
}

export interface Station {
    ID: number,
    Name: string,
    Address: string,
    Capacity: number,
    X: number,
    Y: number,
}