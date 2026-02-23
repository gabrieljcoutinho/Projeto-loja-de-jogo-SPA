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
            
        </div>


    </div>
    </section>
  )
}

export default Home