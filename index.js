
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class ClickOutside extends Component {
  render() {
    const { children } = this.props
    return <div>{children}</div>
  }

  componentDidMount() {
    document.addEventListener('click', this.handle, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handle, true)
  }

  handle = e => {
    const { onClickOutside } = this.props
    const el = ReactDOM.findDOMNode(this)
    if (el.contains(e.target)) return
    if (typeof onClickOutside != 'function') throw new Error('ClickOutside missing onClickOutside function')
    onClickOutside(e)
  }
}
