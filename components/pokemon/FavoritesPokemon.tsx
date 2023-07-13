import { FC } from "react"
import CardPokemon from "./CardPokemon"

interface Props {
    pokemon: Number[]
}

const FavoritesPokemon: FC<Props> = ({ pokemon }) => {
    return (
        <>
            { pokemon.map(id => (
                    <CardPokemon key={Math.random()} id={id} />))}
        </>
    )
}


export default FavoritesPokemon