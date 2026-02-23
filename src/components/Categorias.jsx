import React from 'react'
import "../Css/categoriasDeJogos.css"

import imgAction from "../img/action.png"
import imgRPG from "../img/rpg.png"
import imgStrategu from "../img/strategy.png"
import imgIndie from "../img/indie.png"
import imgMultiplayer from "../img/multiplayer.png"

const Categorias = () => {
  return (
    <div className='conteudoCategorisaJogos'>
        <h3 className='tituloCategoria'>To Categorias</h3>


            <div className="flexboxCategoriasDeJogos">
                <div className="categoriasJogos" id='action'>
                        <img src={} alt="" />
                </div>

                <div className="categoriasJogos" id='rpg'>
                <img src={} alt="" />
                </div>

                <div className="categoriasJogos" id='strategy'>
                <img src={} alt="" />
                </div>

                <div className="categoriasJogos" id='indie'>
                <img src={} alt="" />
                </div>

                <div className="categoriasJogos" id='multiplayer'>
                <img src={} alt="" />
                </div>

                <div className="categoriasJogos" id='exclusiveLoot'>

                </div>
            </div>

    </div>
  )
}

export default Categorias