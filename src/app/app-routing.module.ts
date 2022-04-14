import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePokemonComponent } from './components/create-pokemon/create-pokemon.component';
import { GenerationsComponent } from './components/generations/generations.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonsComponent
  },
  {
    path: 'create-pokemon',
    component: CreatePokemonComponent
  },
  {
    path: 'generations',
    component: GenerationsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
