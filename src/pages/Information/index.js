import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

import LogoMarvel from '../../assets/marvel-logo2.png'

const Information = () => {
  return (
    <Container>
      <img src={LogoMarvel} alt="Logo Marvel" />

      <p>Bem vind@ ao teste técnico de Alexandre Maciel para a ViajarFazBem. </p>
      <p> Clique em "Entrar" para prosseguir.</p>

      <button>
        <Link to="/home">Entrar</Link>
      </button>
    </Container>
  )
}

export default Information
