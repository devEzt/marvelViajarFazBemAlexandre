import React, { useState } from 'react'

import { Container } from './styles'

import Spinner from '../../components/Spinner'
import SearchBar from '../../components/SearchBar'
import Pagination from '../../components/Pagination'
import ListHero from '../../components/ListHero'
import CardHero from '../../components/ListHero/CardHero'

import { useHero } from '../../hooks/useHero'

import ImageSlider from '../../components/Carousel/ImageSlider'
import { SliderData } from '../../components/Carousel/SliderData'

const Home = () => {
  const [{ heros, loading, page }, loadHero, handleNextClick, handlePrevClick] = useHero()
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = (search) => {
    const endpoint = search
      ? `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&`
      : `https://gateway.marvel.com:443/v1/public/characters?limit=8&`

    setSearchTerm(search)
    loadHero(endpoint)
  }

  return (
    <Container>
      <ImageSlider slides={SliderData} />
      <SearchBar callback={searchMovies} />

      {loading ? (
        <Spinner />
      ) : (
        <ListHero>
          {heros.map((hero) => (
            <CardHero key={hero.id} id={hero.id} name={hero.name} thumbnail={hero.thumbnail} />
          ))}
        </ListHero>
      )}

      {!searchTerm && <Pagination page={page} next={handleNextClick} prev={handlePrevClick} />}
    </Container>
  )
}

export default Home
