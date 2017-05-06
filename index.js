
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ClickOutside extends Component {
  static propTypes = {
    onClickOutside: PropTypes.func.isRequired,
    useCapture: PropTypes.bool
  };

  static defaultProps = {
    useCapture: true
  };

  render() {
    const { children, onClickOutside, useCapture, ...props } = this.props
    return <div {...props} ref={ref => this.container = ref}>{children}</div>
  }

  componentDidMount() {
    document.addEventListener('click', this.handle, this.props.useCapture)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handle, this.props.useCapture)
  }

  handle = e => {
    const { onClickOutside } = this.props
    const el = this.container
    if (!el.contains(e.target)) onClickOutside(e)
  };
}
