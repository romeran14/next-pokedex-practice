import { Pokemon, Sprites } from "@/interfaces";
import { pokeApi } from "@/api";



export const getPokemonInfo = async (idOrName: string) => {
  try {

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${idOrName.toLowerCase()}`);

    const pokemon = {
      id: data.id,
      name: data.name,
      sprites: data.sprites
    }
    return pokemon

  } catch (error) {
    return null
  }

}

