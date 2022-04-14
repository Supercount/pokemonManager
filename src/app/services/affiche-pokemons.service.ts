import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffichePokemonsService {

  constructor(private httpClient : HttpClient) { }

  private BASE_URL = "http://localhost:8080/api";


 /*  pokedex : Pokemon[] = [
    {
      "id": 1,
      "pokedex": 1,
      "name": "Bulbizarre",
      "category": "Graine",
      "types": [
        {
          "id": 2,
          "name": "Plante"
        },
        {
          "id": 3,
          "name": "Poison"
        }
      ],
      "height": 0.7,
      "weight": 6.9,
      "image": "https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png"
    },
    {
      "id": 4,
      "pokedex": 2,
      "name": "Herbizarre",
      "category": "Graine",
      "types": [
        {
          "id": 2,
          "name": "Plante"
        },
        {
          "id": 3,
          "name": "Poison"
        }
      ],
      "height": 1.0,
      "weight": 13.0,
      "image": "https://www.pokepedia.fr/images/thumb/4/44/Herbizarre-RFVF.png/250px-Herbizarre-RFVF.png"
    },
    {
      "id": 5,
      "pokedex": 3,
      "name": "Florizarre",
      "category": "Graine",
      "types": [
        {
          "id": 2,
          "name": "Plante"
        },
        {
          "id": 3,
          "name": "Poison"
        }
      ],
      "height": 2.0,
      "weight": 100.0,
      "image": "https://www.pokepedia.fr/images/thumb/4/42/Florizarre-RFVF.png/250px-Florizarre-RFVF.png"
    },
    {
      "id": 6,
      "pokedex": 4,
      "name": "Salamèche",
      "category": "Lézard",
      "types": [
        {
          "id": 7,
          "name": "Feu"
        }
      ],
      "height": 0.6000000238418579,
      "weight": 8.5,
      "image": "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/250px-Salam%C3%A8che-RFVF.png"
    },
    {
      "id": 8,
      "pokedex": 5,
      "name": "Reptincel",
      "category": "Flamme",
      "types": [
        {
          "id": 7,
          "name": "Feu"
        }
      ],
      "height": 1.100000023841858,
      "weight": 19.0,
      "image": "https://www.pokepedia.fr/images/thumb/6/64/Reptincel-RFVF.png/250px-Reptincel-RFVF.png"
    },
    {
      "id": 9,
      "pokedex": 6,
      "name": "Dracaufeu",
      "category": "Flamme",
      "types": [
        {
          "id": 7,
          "name": "Feu"
        },
        {
          "id": 10,
          "name": "Vol"
        }
      ],
      "height": 1.7000000476837158,
      "weight": 90.5,
      "image": "https://www.pokepedia.fr/images/thumb/1/17/Dracaufeu-RFVF.png/250px-Dracaufeu-RFVF.png"
    }
  ]; */

  getPokedex(): Observable<Pokemon[]> {

    return this.httpClient.get<Pokemon[]>(`${this.BASE_URL}/pokemons`);

    // return this.pokedex;
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(`${this.BASE_URL}/pokemons`, data);
  }
}
