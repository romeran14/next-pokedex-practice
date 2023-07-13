import { SmallPokemon } from "@/interfaces"
import { FC } from "react"
import { Grid, Card, Text, Row } from "@nextui-org/react"
import { useRouter } from "next/router"

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
    const { name, img, id } = pokemon
    const router = useRouter()
    const onClick =()=> {
        router.push(`/pokemon/${id}`);
    }

    return (
        <Grid onClick={onClick} key={id} xs={6} sm={3} md={2} >
            <Card isHoverable isPressable  >
                <Card.Body css={{ p: 1, display: 'grid', placeContent: 'center' }}>
                    <Card.Image src={img} width={"100%"} height={"100"} />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between' >
                        <Text transform='capitalize' >#{id}-{name}</Text>
                    </Row>
                </Card.Footer>
            </Card>

        </Grid>
    )
}

