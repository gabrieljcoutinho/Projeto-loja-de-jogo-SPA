import React from 'react'
import "../Css/categoriasDeJogos.css"

import imgAction from "../img/action.png"
import imgRPG from "../img/rpg.png"
import imgStrategy from "../img/strategy.png"
import imgIndie from "../img/indie.png"
import imgMultiplayer from "../img/multiplayer.png"

const Categorias = () => {
  return (
    <div className='conteudoCategorisaJogos'>
        <h3 className='tituloCategoria'>To Categorias</h3>


            <div className="flexboxCategoriasDeJogos  divsJogos">
                <div className="categoriasJogos" id='action'>
                        <img src={imgAction} alt="" />
                </div>

                <div className="categoriasJogos divsJogos" id='rpg'>
                <img src={imgRPG} alt="" />
                </div>

                <div className="categoriasJogos divsJogos" id='strategy'>
                <img src={imgStrategy} alt="" />
                </div>

                <div className="categoriasJogos divsJogos" id='indie'>
                <img src={imgIndie} alt="" />
                </div>

                <div className="categoriasJogos" id='multiplayer'>
                <img src={imgMultiplayer} alt="" />
                </div>

                <div className="categoriasJogos" id='exclusiveLoot'>

                </div>
            </div>

    </div>
  )
}

export default Categorias