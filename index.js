
import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'

class ClickOutside extends Component {
  static propTypes = {
    onClickOutside: PropTypes.func.isRequired
  }

  constructor() {
    super()
    this.handle = this.handle.bind(this)
  }

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

  handle(e) {
    const { onClickOutside } = this.props
    const el = ReactDOM.findDOMNode(this)
    if (el.contains(e.target)) return
    onClickOutside(e)
  }
}

export default ClickOutside
