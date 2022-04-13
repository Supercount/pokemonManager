import { Component, OnInit } from '@angular/core';
import { AffichePokemonsService } from 'src/app/services/affiche-pokemons.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {

  choix : string = 'Pas de choix pour le moment';

  ordre : string = 'ASC';

  pokedex : Pokemon[] = [];

  constructor(private affichePokemon : AffichePokemonsService) {
  }

  switchOrder() {
      this.ordre = this.ordre === 'ASC' ? 'DESC' : 'ASC';
  }

  receptionchoix(choix : string) {
    this.choix = choix;
  }

  affiche() {
    this.pokedex = this.affichePokemon.getPokedex();
  }

}
