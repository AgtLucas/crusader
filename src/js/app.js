import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import Card from './Card'

class App extends Component {
  render () {
    return (
      <Card frontCard='Foo!' backCard='Bar!' />
    )
  }
}

render(<App />, document.getElementById('app__root'))
