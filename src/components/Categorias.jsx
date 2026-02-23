import React from 'react'
import "../Css/categoriasDeJogos.css"

const Categorias = () => {
  return (
    <div className='conteudoCategorisa Jogos'>
        <h3 className='tituloCategoria'>To Categorias</h3>


            <div className="flexboxCategoriasDeJogos">
                <div className="categoriasJogos" id=''>Action</div>
                <div className="categoriasJogos" id=''>RPG</div>
                <div className="categoriasJogos" id=''>Strategy</div>
                <div className="categoriasJogos">Indie</div>
                <div className="categoriasJogos">Multiplayer</div>
                <div className="categoriasJogos"> Exclusive Loot</div>
            </div>

    </div>
  )
}

export default Categorias