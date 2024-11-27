import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/navbar'

function App() {
  const salvar_tema = localStorage.getItem('salvar_tema')
  const [tema, setTema] = useState(salvar_tema ? salvar_tema : 'dark')
  useEffect(()=> {
    localStorage.setItem('salvar_tema', tema)
  },[tema]);
  return (
      <div className={`container ${tema}`}>
        <Navbar tema={tema} setTema={setTema}/>
      </div>
  )
}

export default App
