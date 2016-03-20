import React, { Component, PropTypes } from 'react'
import FlipCard from 'react-flipcard'

export default class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFlipped: false
    }
  }

  showBack () {
    this.setState({
      isFlipped: true
    })
  }

  showFront () {
    this.setState({
      isFlipped: false
    })
  }

  handleOnFlip (flipped) {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus()
    }
  }

  handleKeyDown (e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront()
    }
  }

  render () {
    return (
      <div className='c__card'>
        <FlipCard
          flipped={this.state.isFlipped}
          onFlip={this.handleOnFlip}
          onKeyDown={this.handleKeyDown}>
          <div className='c__card--front'>
            {this.props.frontCard}
          </div>
          <div className='c__card--back'>
            {this.props.backCard}
          </div>
        </FlipCard>
      </div>
    )
  }
}
