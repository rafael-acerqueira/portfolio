import React, { Component } from 'react'


class App extends Component {
  state = {
    displayBio: false
  }
  
  toggleDisplayBio = () => {
    this.setState((state, props) => {
      return { displayBio: !state.displayBio }
    })
  }
  
  render() {
    return(
      <div>
        <h1>Hello!</h1>
        <p>My name is Rafael. I'm software engineer</p>
        <p>I'm always looking foward to working on meaningful projects</p>
        {
          this.state.displayBio 
          && 
          <div>
            <p>Mais informações aqi obre isso</p>
            <p>E outra</p>
            <p>E outra</p>
            
          </div>
        }

        <button onClick={this.toggleDisplayBio}>{this.state.displayBio ? 'Show less' : 'Read more'}</button>
      </div>
    )
  }
}

export default App