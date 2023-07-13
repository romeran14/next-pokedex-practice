import { FC, PropsWithChildren} from "react"
import React from "react"
import Head from "next/head"
import { Navbar } from "../ui"


type Props = {
  title?: string
}

const origin = (typeof window === 'undefined') ? '':window.location.origin

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {

  console.log(origin)

  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Romeran" />
        <meta name="description" content={`informacion sobre el pokemon ${title}`} />
        <meta name="keywords" content={`pokedex pikachu pokemon ${title}`} />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`}/>
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{ padding: '10px' }} >

        {children}
      </main>
    </>
  )
}

