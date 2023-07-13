import { useTheme, Text, Spacer, Link } from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"

export const Navbar = () => {
    const { theme } = useTheme()


    return (
        <div style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.blue400.value
        }} >
            <NextLink style={{ display: 'flex' }} href={'/'} >
              
                    <Image alt="icono de la app" width={80} height={80} src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"} />
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okemon</Text>
              

            </NextLink>

            <Spacer css={{ flex: '1' }} ></Spacer>
            <NextLink href={'/favoritos'} >
               
                    <Text color="white" >Favoritos</Text>
               
            </NextLink>

        </div>
    )
}

