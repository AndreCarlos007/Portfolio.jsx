import React from 'react'
import pesquisa_icon_dark from '../../assets/search-w.png'
import button_luz from '../../assets/night.png'
import button_dark from '../../assets/day.png'
import "./style.css"

const navBar = ({tema, setTema}) => {
  const mudar_fundo = () => {
    tema == 'dark' ? setTema('ligth') : setTema('dark');
    
  }
  return (
    <div className='navbar'>
      <h1 className='logo'>André <a className='ponto'>.</a></h1>
      <ul>
        <li>Home</li>
        <li>Serviços</li>
        <li>Resumo</li>
        <li>Projetos</li>
        <li className='form-contato'>Contate-me</li>
      </ul>

      <div className='pesquisa'>
          <input type="text" placeholder='ser um ótimo dev...' disabled/>
          <img src={pesquisa_icon_dark} alt="" />
      </div>

      <img onClick={()=>{mudar_fundo()}} src={tema == 'dark' ? button_dark : button_luz} alt="" className='luz'/>

        <div className='menu_cell'>
        <ul>
        <li>Home</li>
        <li>Serviços</li>
        <li>Resumo</li>
        <li>Projetos</li>
        <li className='form-contato'>Contate-me</li>
      </ul>
        </div>
    </div>
    
  )
}

export default navBar

