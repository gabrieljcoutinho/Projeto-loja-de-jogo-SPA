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
       <input type="text" name="" id="" />

          <button className='btnLogarHeader'>Sign Up</button>
       </div>

       </div>


    </div>
  )
}

export default Header