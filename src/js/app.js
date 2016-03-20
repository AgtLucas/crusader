import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render () {
    return (
      <div>Foo!</div>
    )
  }
}

render(<App />, document.getElementById('app__root'))
