
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ClickOutside from '../index'

class Menu extends Component {
  state = {
    open: false
  };

  render() {
    const { open } = this.state

    const items = <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ul>

    return <div className="Menu">
      <ClickOutside onClickOutside={::this.hide}>
        <a href="#" onClick={::this.toggle}>Menu</a>
        {open ? items : null}
      </ClickOutside>
    </div>
  }

  toggle() {
    const { open } = this.state
    this.setState({ open: !open })
  }

  hide() {
    this.setState({ open: false })
  }
}

ReactDOM.render(<Menu />, document.querySelector('#content'))
