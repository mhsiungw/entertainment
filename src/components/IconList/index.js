import React from 'react'
import Icon from './Icon'
import IconList from './IconList'
import { ReactComponent as Home } from '../../assets/icon/icon-nav-home.svg'
import { ReactComponent as Movies } from '../../assets/icon/icon-nav-movies.svg'
import { ReactComponent as TV } from '../../assets/icon/icon-nav-tv-series.svg'
import { ReactComponent as BookMark } from '../../assets/icon/icon-nav-bookmark.svg'

const Index = () => {
  return (
    <IconList>
      <Icon children={Home} route="/" />
      <Icon children={Movies} route="movies" />
      <Icon children={TV} route="series" />
      <Icon children={BookMark} route="bookmark" />
    </IconList>
  )
}

export default Index
