import React from 'react'
import '../Css/header.css'


const Header = () => {
  return (
    <div className='header'>

        <ul className="lista-header">
          <li className="itensLista"><a href="#" className='linksLista'>Home</a></li>
          <li className="itensLista"><a href="#" className='linksLista'>Store</a></li>
          <li className="itensLista"><a href="#" className='linksLista'>Community</a></li>
          <li className="itensLista"><a href="#" className='linksLista'>Profile</a></li>
        </ul>


    </div>
  )
}

export default Header