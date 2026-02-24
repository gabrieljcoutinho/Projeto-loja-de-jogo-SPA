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

        <div className="flexboxCategoriasDeJogos">
            {/* Adicionado divsJogos aqui para herdar o border-radius */}
            <div className="categoriasJogos divsJogos" id='action'>
                <img src={imgAction} alt="Action" />
                <h2>Action</h2>
            </div>

            <div className="categoriasJogos divsJogos" id='rpg'>
                <img src={imgRPG} alt="RPG" />
                <h2>RPG</h2>
            </div>

            <div className="categoriasJogos divsJogos" id='strategy'>
                <img src={imgStrategy} alt="Strategy" />
                <h2>Strategy</h2>
            </div>

            <div className="categoriasJogos divsJogos" id='indie'>
                <img src={imgIndie} alt="Indie" />
                <h2>Indie</h2>
            </div>

            <div className="categoriasJogos divsJogos" id='multiplayer'>
                <img src={imgMultiplayer} alt="Multiplayer" />
                <h2>Multiplayer</h2>
            </div>
        </div>

        <div className="categoriasJogos divsJogos" id='exclusiveLoot'>
    <div className="cardContent">
        <span className="badge">RARE DROP</span>
        <h2>Exclusive Loot</h2>
        <p className="descricaoExclusiveLoot">
            Join our newsletter and receive <br />
            rare in-game items every month!
        </p>

        <div className="actionArea">
            <input type="email" placeholder="Enter your email..." className="lootInput" />
            <button className="lootBtn">CLAIM MY ITEMS</button>
        </div>

        <div className="lootIcons">
            <span>💎</span> <span>⚔️</span> <span>🛡️</span>
        </div>
    </div>
</div>
    </div>
  )
}

export default Categorias