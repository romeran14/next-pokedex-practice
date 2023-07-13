import { FC } from "react"
import { Grid, Card } from "@nextui-org/react"
import { useRouter } from "next/router"

interface Props {
    id: Number
}

const CardPokemon: FC<Props> = ({ id }) => {
    const route = useRouter()

    const handleOnClick = ()=>{
        route.push(`/pokemon/${id}`)
    }
    return (
        <Grid.Container onClick={handleOnClick} gap={2} direction={'row'} justify={'flex-start'}>
            <Card isHoverable isPressable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={'100%'}
                    height={'140px'}
                />
            </Card>
        </Grid.Container>
    )
}

export default CardPokemon