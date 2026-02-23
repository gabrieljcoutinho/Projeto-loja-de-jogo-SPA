import React from 'react'
import "../Css/categoriasDeJogos.css"

const Categorias = () => {
  return (
    <div className='conteudoCategorisa Jogos'>
        <h3 className='tituloCategoria'>To Categorias</h3>


            <div className="flexboxCategoriasDeJogos">
                <div className="categoriasJogos" id='action'>Action</div>
                <div className="categoriasJogos" id='rpg'>RPG</div>
                <div className="categoriasJogos" id='strategy'>Strategy</div>
                <div className="categoriasJogos" id='indie'>Indie</div>
                <div className="categoriasJogos" id=''>Multiplayer</div>
                <div className="categoriasJogos" id=''> Exclusive Loot</div>
            </div>

    </div>
  )
}

export default Categorias