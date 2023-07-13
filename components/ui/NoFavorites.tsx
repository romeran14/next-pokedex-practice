import { Container } from '@nextui-org/react'
import {Text} from '@nextui-org/react'
import {Image} from '@nextui-org/react'

const NoFavorites = () => {
  return (
    <Container css={{display:'flex',
    flexDirection:'column',
    height:'calc(100vh - 100px)',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center'
 }} >

   <Text>No hay favoritos</Text>
   <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg"}
     width={250}
     height={250}
     css={{opacity:0.2}}
     alt='error imagen'
   ></Image>
 </Container>
  )
}

export default NoFavorites