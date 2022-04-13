import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class AffichePokemonsService {

  constructor() { }


  pokedex : Pokemon[] = [
    {
      id: 4,
      name: "Salamèche",
      category: "Lézard",
      type: ["Feu"],
      taille: 0.6,
      poids: 8.5,
      image: "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/250px-Salam%C3%A8che-RFVF.png"
    },
    {
      id: 1,
      name: "Bulbizarre",
      category: "Graine",
      type: ["Plante", "Poison"],
      taille: 0.7,
      poids: 6.9,
      image: "https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png"
    },
    {
      id: 5,
      name: "Reptincel",
      category: "Flamme",
      type: ["Feu"],
      taille: 1.1,
      poids: 19,
      image: "https://www.pokepedia.fr/images/thumb/6/64/Reptincel-RFVF.png/250px-Reptincel-RFVF.png"
    },
    {
      id: 2,
      name: "Herbizarre",
      category: "Graine",
      type: ["Plante", "Poison"],
      taille: 1,
      poids: 13,
      image: "https://www.pokepedia.fr/images/thumb/4/44/Herbizarre-RFVF.png/250px-Herbizarre-RFVF.png"
    },
    {
      id: 6,
      name: "Dracaufeu",
      category: "Flamme",
      type: ["Feu", "Vol"],
      taille: 1.7,
      poids: 90.5,
      image: "https://www.pokepedia.fr/images/thumb/1/17/Dracaufeu-RFVF.png/250px-Dracaufeu-RFVF.png"
    },
    {
      id: 3,
      name: "Florizarre",
      category: "Graine",
      type: ["Plante", "Poison"],
      taille: 2,
      poids: 100,
      image: "https://www.pokepedia.fr/images/thumb/4/42/Florizarre-RFVF.png/250px-Florizarre-RFVF.png"
    }
  ];

  getPokedex(): Pokemon[] {
    return this.pokedex;
  }
}
