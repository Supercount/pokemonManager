import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonType } from 'src/app/models/pokemon-type';
import { AffichePokemonsService } from 'src/app/services/affiche-pokemons.service';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit {

  registerForm!: FormGroup;

  typeList : String[] = [];

  pokemon: Pokemon= {
    id: 0,
    pokedex: 0,
    name: '',
    category: '',
    types: [],
    height: 0,
    weight: 0,
    image: ''
  };
  submitted = false;

  constructor(private service : AffichePokemonsService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id : [this.pokemon.id],
      pokedex : [this.pokemon.pokedex],
      name : [this.pokemon.name],
      category : [this.pokemon.category],
      types : [this.pokemon.types],
      height : [this.pokemon.height],
      weight : [this.pokemon.weight],
      image : [this.pokemon.image] 
    });
    
    this.service.getTypes().subscribe({
      next: types => {
        this.typeList = types;
      }, error: err => {
        console.log(err);
      }, complete: () => {
        console.log('fin de chargement');
      }
    });
  }

  savePokemon(): void {
    if (this.pokemon.types[1] == this.pokemon.types[0]) {
      this.pokemon.types.pop();
    }
    const data = {
      id : this.pokemon.id,
      pokedex : this.pokemon.pokedex,
      name : this.pokemon.name,
      category : this.pokemon.category,
      types : this.pokemon.types,
      height : this.pokemon.height,
      weight : this.pokemon.weight,
      image : this.pokemon.image 
    };
    this.service.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  close(): void {
    this.submitted = true;
  }
  
  newPokemon(): void {
    this.submitted = false;
    this.pokemon = {
      id : 0,
      pokedex : 0,
      name : '',
      category : '',
      types : [],
      height : 0,
      weight : 0,
      image : '' 
    };
  }

}
