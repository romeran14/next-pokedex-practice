import { Layout } from "@/components/layouts"
import { NextPage } from "next"
import NoFavorites from "@/components/ui/NoFavorites"
import { useState, useEffect } from "react"
import { localFavorites } from "@/utils"
import FavoritesPokemon from "@/components/pokemon/FavoritesPokemon"


export const FavoritosPage: NextPage = () => {
  const [pokemon, setpokemon] = useState<Number[]>([])
  useEffect(() => {
    setpokemon(localFavorites.pokemons())
  }, [])

  return (
    <Layout title="POkemon favoritos" >

      {pokemon.length === 0 ? (<NoFavorites />) : (
       <FavoritesPokemon pokemon={pokemon} />

      )}
    </Layout>
  )
}

export default FavoritosPage