import React from 'react'
import PropTypes from 'prop-types'

import ImageNotFund from '../../../assets/no_find.png'

import { Container, Content, WrapperHero } from './styles'

const CardHero = (props) => {
  const extension = props.thumbnail.path + '.' + props.thumbnail.extension
  const avatar =
    extension === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? ImageNotFund : extension

  return (
    <Container image={avatar}>
      <a href={'/hero/' + props.id}>
        <Content>
          <WrapperHero>
            <img src={avatar} alt={props.name} />
          </WrapperHero>
          <strong>{props.name}</strong>
        </Content>
      </a>
    </Container>
  )
}

CardHero.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  thumbnail: PropTypes.object,
}

export default CardHero
