import { NextPage } from "next";
import Head from "next/head";
import { List } from "phosphor-react";

import Navbar from "@/styles/components/navbar.module.scss"
import Home from "@/styles/pages/home.module.scss"

const render: NextPage<{}> = () => {
  return (
    <>
      <Head>
        <title>Página Principal - Borghi Imóveis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />
      <main className={Home.container}>
        <div>
          <h1>Novos Lugares. Novas Ideias</h1>
          <p>Corretora De Imóveis Desde 1999</p>
        </div>       
      </main>
    </>
  )
}

function Header() {
  return (
    <nav className={Navbar.container}>
      <button>
        <List size={32} />
      </button>
    </nav>
  )
}

export default render;