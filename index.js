
import React, { Component, PropTypes } from 'react'

export default class ClickOutside extends Component {
  static propTypes = {
    onClickOutside: PropTypes.func.isRequired
  };

  render() {
    const { children, onClickOutside, ...props } = this.props
    return <div {...props} ref='container'>{children}</div>
  }

  componentDidMount() {
    document.addEventListener('click', this.handle, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handle, true)
  }

  handle = e => {
    const { onClickOutside } = this.props
    const el = this.refs.container
    if (!el.contains(e.target)) onClickOutside(e)
  };
}
