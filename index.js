
import React, { Component, PropTypes } from 'react'

export default class ClickOutside extends Component {
  static propTypes = {
    onClickOutside: PropTypes.func.isRequired,
    exceptions: PropTypes.array
  };

  render() {
    const { children, onClickOutside, exceptions, ...props } = this.props
    return <div {...props} ref={ref => this.container = ref}>{children}</div>
  }

  componentDidMount() {
    document.addEventListener('click', this.handle, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handle, true)
  }

  handle = e => {
    const {onClickOutside, exceptions} = this.props

    let exceptionsApproved             = false
    if (exceptions) {
      exceptionsApproved = exceptions.some((except) => {
        return ![e.target.className, e.target.id].includes(except);
      });
    }

    const el = this.container
    if (!el.contains(e.target) && exceptionsApproved) onClickOutside(e)
  };
}
