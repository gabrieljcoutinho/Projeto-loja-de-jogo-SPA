import React from 'react'
import '../Css/games.css'

import jogo1 from "../../src/img/jogo1.png"
import jogo2 from "../../src/img/jogo2.png"
import jogo3 from "../../src/img/jogo3.png"

const Games = () => {
  return (
    <div>

            <div className="flexbox">
                <div className="divFlexbox">
                  <img src={jogo1} alt="" className='imgFlexbox' />
                  <span className='notaJogo'>4.9</span>
                  <hr className='linhaSobImg' />
                  <h2 className="tituloDoJogo">Cyber Chase</h2>
                    <p className="descricaoDoJogo">Action ° Open World</p>
                    <br />
                    <div className="movimentacaoBtnJogos">
                      <a className="btnJogo">Quick Play</a>
                    </div>
                </div>

                <div className="divFlexbox">
                <img src={jogo2} alt=""  className='imgFlexbox' />
                <span className='notaJogo'>4.7</span>
                <hr className='linhaSobImg' />
                <h2 className="tituloDoJogo">Mythic Quest</h2>
                <p className="descricaoDoJogo">RPG º Adventure</p>
                <br />
                <div className="movimentacaoBtnJogos">
                  <a className="btnJogo">Quick Play</a>
                </div>
                </div>

                <div className="divFlexbox">
                <img src={jogo3} alt=""  className='imgFlexbox' />
                <hr className='linhaSobImg' />
                <h2 className="tituloDoJogo">Speed Racer</h2>
                <p className="descricaoDoJogo">Racing º Simulator</p>
                <br />
                <div className="movimentacaoBtnJogos">
                  <a className="btnJogo">Quick Play</a>
                </div>
                </div>

                <div className="divFlexbox " id="divRanqueamento">

                </div>
            </div>

    </div>
  )
}

export default Games