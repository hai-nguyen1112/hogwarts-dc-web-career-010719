import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import hogs from '../porkers_data'
import HogsContainer from './HogsContainer'
import SortBar from './SortBar'
import FilterBar from './FilterBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      sort: 'unsort',
      hogs: [...hogs],
      filter: 'all',
      gifs: {}
    }
  }

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/search?q=pig&api_key=egbUmpdYnCQdAIkmcWr0tX2Q56n2mQRd&limit=13')
    .then(res => res.json())
    .then(response => {
      let gifs = {}
      for (let i = 0; i < hogs.length; i++) {
        gifs[hogs[i].name] = response.data[i].images.downsized_medium.url
      }
      this.setState({gifs: gifs})
    })
  }

  handleSort = event => {
    this.setState({sort: event.target.value})
  }

  handleFilter = event => {
    this.setState({filter: event.target.value})
  }

  render() {
    let sortedAndFilteredHogs
    if (this.state.sort === 'byweight') {
      if (this.state.filter === 'all') {
        sortedAndFilteredHogs = this.state.hogs.sort((a, b) => b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
      } else if (this.state.filter === 'greased') {
        sortedAndFilteredHogs = this.state.hogs.sort((a, b) => b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']).filter(hog => hog.greased === true)
      } else if (this.state.filter === 'non-greased') {
        sortedAndFilteredHogs = this.state.hogs.sort((a, b) => b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']).filter(hog => hog.greased === false)
      }
    } else if (this.state.sort === 'byname') {
      if (this.state.filter === 'all') {
        sortedAndFilteredHogs = this.state.hogs.sort((a, b) => a.name.localeCompare(b.name))
      } else if (this.state.filter === 'greased') {
        sortedAndFilteredHogs = this.state.hogs.sort((a, b) => a.name.localeCompare(b.name)).filter(hog => hog.greased === true)
      } else if (this.state.filter === 'non-greased') {
        sortedAndFilteredHogs = this.state.hogs.sort((a, b) => a.name.localeCompare(b.name)).filter(hog => hog.greased === false)
      }
    } else if (this.state.sort === 'unsort') {
      if (this.state.filter === 'all') {
        sortedAndFilteredHogs = hogs
      } else if (this.state.filter === 'greased') {
        sortedAndFilteredHogs = hogs.filter(hog => hog.greased === true)
      } else if (this.state.filter === 'non-greased') {
        sortedAndFilteredHogs = hogs.filter(hog => hog.greased === false)
      }
    }
    return (
      <div className="App">
          <Nav />
          <SortBar onSort={this.handleSort}/>
          <FilterBar onFilter={this.handleFilter}/>
          <HogsContainer hogs={sortedAndFilteredHogs} gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default App
