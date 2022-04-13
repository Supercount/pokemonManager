import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  @Input()
  pokemon!: Pokemon;

  @Output()
  event = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  choisir() {
    this.event.emit(this.pokemon.name);
  }
}
