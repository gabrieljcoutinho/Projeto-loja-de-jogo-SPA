import React from 'react'
import "../../src/Css/home.css"
import bgVideo from "../video/videoProjeto.mp4" // ajuste o caminho

const Home = () => {
  return (
    <div className='home'>
      <video autoPlay loop muted playsInline className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="content">
        <h1>Meu Site</h1>
      </div>
    </div>
  )
}

export default Home