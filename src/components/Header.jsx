import React from 'react'
import '../Css/header.css'


const Header = () => {
  return (
    <div className='header'>

       <div className="conteudo">
       <ul className="lista-header">
          <li className="itensLista"><a href="#" className='linksLista'>Home</a></li>
          <li className="itensLista"><a href="#" className='linksLista'>Store</a></li>
          <li className="itensLista"><a href="#" className='linksLista'>Community</a></li>
          <li className="itensLista"><a href="#" className='linksLista'>Profile</a></li>
        </ul>

        <div className="inputBusca">
  <svg className="iconLupa" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>

  <input type="text" placeholder="Search games..." />


</div>
<button className='btnLogarHeader'>Sign Up</button>
       </div>


    </div>
  )
}

export default Header