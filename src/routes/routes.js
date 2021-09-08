import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Information from '../pages/Information'
import DetailHero from '../pages/HeroDetail'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Information} />
      <Route path="/home" component={Home} />
      <Route path="/hero/:id" component={DetailHero} />
    </Switch>
  )
}

export default Routes
