// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      name: ''
    }
  }

  

  handleChange = event => {
    this.setState({
      name: event.target.value 
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label> Band Name: </label>
            <input type="text" onChange={this.handleChange} value={this.state.name}/>
          </p>
            <input type="submit" value="Add Band"/>
        </form>
        {this.state.name}
      </div>
    )
  }
}

export default BandInput
