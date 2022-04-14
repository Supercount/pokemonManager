import { PokemonType } from "./pokemon-type";

export interface Pokemon {
    id: number;
    pokedex : number;
    name: string;
    category: string;
    types: PokemonType[];
    height : number;
    weight : number;
    image : string;
    selected?: boolean;
}
