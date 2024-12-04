import React, { useEffect, useState } from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx';
import Resume from './components/Resumo/Resumo.jsx'
import Services from './components/Services/Services.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';


function App() {
  const salvar_tema = localStorage.getItem('salvar_tema')
  const [tema, setTema] = useState(salvar_tema ? salvar_tema : 'dark')
  useEffect(()=> {
    localStorage.setItem('salvar_tema', tema)
  },[tema]);
  
  const location = useLocation();

  return (
      <div className={`container ${tema}`}>
        <Navbar tema={tema} setTema={setTema}/>

        <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
              <Route index element={ <Home />} />
              <Route path='/Resume' element={ <Resume /> }/>
              <Route path='/Services' element={ <Services /> }/>
              <Route path='/Projects' element={ <Projects /> }/>
              <Route path='/Contact' element={ <Contact /> }/>
              <Route />
          </Routes>
        </AnimatePresence>
      </div>
  )
}

export default App
