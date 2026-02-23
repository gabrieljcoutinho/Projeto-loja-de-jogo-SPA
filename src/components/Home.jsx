import React from 'react'
import "../../src/Css/home.css"
import bgVideo from "../video/videoProjeto.mp4" // ajuste se necessário

const Home = () => {
  return (
    <section className='home'>

    <div className="movimentacao">
    <video autoPlay loop muted playsInline className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="overlay"></div>


        <div className="conteudo">
                    <h1>Cyber Chase: <br/> <span>Neon Protocol</span></h1>
                    <p className="paragrafoIntroducao">
                        Unlock the next generation of neural combat. Dive into a <br/>
                        sprawling metropolis where every decision rewrites tje city`s future</p>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br />

            <div className="movimentacaoBtn">

                <ul className='listaBtn'>
                    <li> <button>Play Now</button></li>
                    <li> <button>Whatch Trailer </button></li>
                </ul>

            </div>

    </div>
    </section>
  )
}

export default Home