import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import button_luz from '../../assets/night.png'
import button_dark from '../../assets/day.png'
import menu_aberto from '../../assets/menu_white_36dp.svg'
import menu_close from '../../assets/close_white_36dp.svg'
import menu_close_black from '../../assets/close_black.svg'
import menu_aberto_black from '../../assets/menu_black.svg'
import "./style.css"

const Navbar = ({tema, setTema}) => {
// função para mudar o fundo
  const mudar_fundo = () => {
    tema == 'dark' ? setTema('ligth') : setTema('dark');
    
  };
// função para abrir e fechar o menu
  const [aberto, setAberto] = useState(false);
  const abrirMenu = () => {
    setAberto(!aberto);
  };
// consigo fechar o menu ao clicar em um item do proprio
  const fecharMenu = () => {
    setAberto(false);
}
// usar duas fuções ao mesmo tempo de acordo com o tema
const menuIcon = tema === 'ligth' 
? (aberto ? menu_close_black : menu_aberto_black) 
: (aberto ? menu_close : menu_aberto);

  return (
    <div className='navbar'>
      <h1 className='logo'><Link to="/">André .</Link></h1>
      <ul className='nav-item'>
        <li> <Link to="/">Home</Link ></li>
        <li><Link to="/Resume">Resume</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <Link className='form-contato' to="/Contact">Contact</Link>
      </ul>

      {/* MENU PARA TELAS MENORES COMO TABLET, CELULAR etc. */}
      <div >
        <ul onClick={fecharMenu} className={`mobile_menu ${aberto ? 'open' : ''}`}>
        <li> <Link to="/">Home</Link ></li>
        <li><Link to="/Resume">Resume</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <Link className='form-contato' to="/Contact">Contact</Link>
        </ul>
      </div>

      <img onClick={()=>{mudar_fundo()}} src={tema == 'dark' ? button_dark : button_luz} alt="" className='luz'/>
      <img className='button_menu_cell' onClick={()=>{abrirMenu()}} src={menuIcon} alt="" />
    </div>
    
  )
}

export default Navbar

