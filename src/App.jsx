import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/itemListContainer/itemListContainer'

function App() {



  return (
    <>
  <NavBar />
  <ItemListContainer greeting="Bienvenido al principio de algo grande"/>
    </>
  )
}

export default App