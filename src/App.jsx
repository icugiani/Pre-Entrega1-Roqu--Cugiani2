import React from 'react'
import Navbar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer"
import { Center } from '@chakra-ui/react'

const App = () => {
  return (
<div>
    <Navbar />
    <Center h='100px' fontSize={35}>
    <ItemListContainer greeting={"Bienvenido a Pigmalion"}/>
</Center>
</div>
  )
}

export default App

