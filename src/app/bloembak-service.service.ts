import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BloembakServiceService {
  crops: Crop[] = [
    {
      Name: 'Tomaat',
      MoistureLvl: 65,
      PlantTime: new Date(2025, 2, 15),
      HarvestTime: new Date(2025, 6, 20)
    },
    {
      Name: 'Aardbei',
      MoistureLvl: 70,
      PlantTime: new Date(2025, 3, 5),
      HarvestTime: new Date(2025, 7, 1)
    },
    {
      Name: 'Sla',
      MoistureLvl: 60,
      PlantTime: new Date(2025, 4, 1),
      HarvestTime: new Date(2025, 5, 10)
    },
    {
      Name: 'Paprika',
      MoistureLvl: 65,
      PlantTime: new Date(2025, 2, 20),
      HarvestTime: new Date(2025, 7, 15)
    },
    {
      Name: 'Basilicum',
      MoistureLvl: 55,
      PlantTime: new Date(2025, 3, 10),
      HarvestTime: new Date(2025, 6, 30)
    },
    {
      Name: 'Komkommer',
      MoistureLvl: 75,
      PlantTime: new Date(2025, 4, 15),
      HarvestTime: new Date(2025, 7, 25)
    }
  ];

  private _bloembakken: Bloembak[] = [
    {
      ID: 1,
      Name: 'Bloembak 1',
      CurrentCrop: this.crops[0], // Tomaat
      NextCrop: this.crops[1],    // Aardbei
      Moisture: 62,
      Alive: true
    },
    {
      ID: 2,
      Name: 'Bloembak 2',
      CurrentCrop: this.crops[1], // Aardbei
      NextCrop: this.crops[2],    // Sla
      Moisture: 68,
      Alive: true
    },
    {
      ID: 3,
      Name: 'Bloembak 3',
      CurrentCrop: this.crops[2], // Sla
      NextCrop: this.crops[4],    // Basilicum
      Moisture: 59,
      Alive: true
    },
    {
      ID: 4,
      Name: 'Bloembak 4',
      CurrentCrop: this.crops[3], // Paprika
      NextCrop: this.crops[0],    // Tomaat
      Moisture: 65,
      Alive: true
    },
    {
      ID: 5,
      Name: 'Bloembak 5',
      CurrentCrop: this.crops[4], // Basilicum
      NextCrop: this.crops[5],    // Komkommer
      Moisture: 57,
      Alive: false
    },
    {
      ID: 6,
      Name: 'Bloembak 6',
      CurrentCrop: this.crops[5], // Komkommer
      NextCrop: this.crops[3],    // Paprika
      Moisture: 72,
      Alive: true
    }
  ];

  constructor() { }

  public get bloembakken(): Bloembak[] {
    return this._bloembakken;
  }

  public set bloembakken(value: Bloembak[]) {
    this._bloembakken = value;
  }
}

export interface Bloembak {
  ID: number;
  Name: string;
  CurrentCrop: Crop;
  NextCrop: Crop;
  Moisture: number;
  Alive: Boolean
}

export interface Crop {
  Name: string;
  MoistureLvl: number;
  PlantTime: Date;
  HarvestTime: Date;
}
