import React, {Component} from 'react'

class HogTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hog: props.hog,
      clicked: false,
      hide: false
    }
  }

  handleClickOfHog = () => {
    this.setState({clicked: !this.state.clicked})
  }

  handleDoubleClickOfHog = () => {
    this.setState({hide: true})
  }

  render() {
    let hogName = this.state.hog.name
    return (
      <div className="ui four wide column">
      {
        this.state.hide
        ?
        null
        :
        this.state.clicked
        ?
        <div className="ui card">
          <div className='image'>
            <img
              src={this.props.gifs[hogName]}
              alt={this.state.hog.name}
              onClick={this.handleClickOfHog}
              onDoubleClick={this.handleDoubleClickOfHog}
            />
          </div>
          <div className="content">
            <div className="header">
              {this.state.hog.name}
            </div>
            <div className="description">
              Specialty: {this.state.hog.specialty} <br/>
              Greased: {this.state.hog.greased ? 'Yes' : 'No'} <br/>
              Weight: {this.state.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} <br/>
              Highest Medal: {this.state.hog['highest medal achieved']}
            </div>
          </div>
        </div>
        :
        <div className="ui card">
          <div className='image'>
            <img
              src={this.props.gifs[hogName]}
              alt={this.state.hog.name}
              onClick={this.handleClickOfHog}
              onDoubleClick={this.handleDoubleClickOfHog}
            />
          </div>
          <div className="content">
            <div className="header">
              {this.state.hog.name}
            </div>
          </div>
        </div>
      }
      </div>
    )
  }
}

export default HogTile
