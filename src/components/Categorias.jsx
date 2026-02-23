import React from 'react'
import "../Css/categoriasDeJogos.css"

import imgAction from "../img/action.png"
import imgRPG from "../img/rpg.png"
import imgStrategu from "../img/strategy.png"

const Categorias = () => {
  return (
    <div className='conteudoCategorisaJogos'>
        <h3 className='tituloCategoria'>To Categorias</h3>


            <div className="flexboxCategoriasDeJogos">
                <div className="categoriasJogos" id='action'>Action</div>

                <div className="categoriasJogos" id='rpg'>RPG</div>

                <div className="categoriasJogos" id='strategy'>Strategy</div>

                <div className="categoriasJogos" id='indie'>Indie</div>

                <div className="categoriasJogos" id='multiplayer'>Multiplayer</div>

                <div className="categoriasJogos" id='exclusiveLoot'> Exclusive Loot</div>
            </div>

    </div>
  )
}

export default Categorias