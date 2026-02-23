import React from 'react'
import "../Css/categoriasDeJogos.css"

const Categorias = () => {
  return (
    <div className='conteudoCategorisa Jogos'>
        <h3 className='tituloCategoria'>To Categorias</h3>


            <div className="flexboxCategoriasDeJogos">
                <div className="categoriasJogos">Action</div>
                <div className="categoriasJogos">RPG</div>
                <div className="categoriasJogos">Strategy</div>
                <div className="categoriasJogos">Indie</div>
                <div className="categoriasJogos">5</div>
                <div className="categoriasJogos">6</div>
            </div>

    </div>
  )
}

export default Categorias