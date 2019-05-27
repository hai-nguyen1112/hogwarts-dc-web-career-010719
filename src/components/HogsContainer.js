import React from 'react'
import HogTile from '../containers/HogTile'

const HogsContainer = ({hogs, gifs}) => {
  let hogTiles = hogs.map(hog => <HogTile key={hog.name} hog={hog} gifs={gifs}/>)
  return (
    <div className="ui grid container">
    {hogTiles}
    </div>
  )
}

export default HogsContainer
