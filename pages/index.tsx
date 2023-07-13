import { Layout } from '@/components/layouts';
import { PokemonCard } from '@/components/pokemon';
import { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { Card, Grid, Row, Text } from '@nextui-org/react';


interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  const title = 'listOfPokemon'

  return (
    <>
      <Layout title={title} >
        <Grid.Container gap={2} justify='flex-start'>
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid.Container>
      </Layout>
    </>

  )
}
export default HomePage
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151"); // your fetch function here 
  const pokemons: SmallPokemon[] = data.results.map((item, index) => {
    let pokemon = {
      id: (index + 1),
      name: item.name,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
      url: item.url
    }
    return pokemon
  })
  return {
    props: {
      pokemons: pokemons
    }
  }
}