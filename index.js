import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ClickOutside extends Component {
  static propTypes = {
    onClickOutside: PropTypes.func.isRequired,
    exceptionElementClass: PropTypes.array,
    exceptionElementId: PropTypes.array
  }

  static defaultProps = {
    exceptionElementClass: [],
    exceptionElementId: []
  }

  constructor(props) {
    super(props)
    this.getContainer = this.getContainer.bind(this)
    this.isTouch = false
  }

  getContainer(ref) {
    this.container = ref
  }

  render() {
    const { children, onClickOutside, ...props } = this.props
    return <div {...props} ref={this.getContainer}>{children}</div>
  }

  componentDidMount() {
    document.addEventListener('touchend', this.handle, true)
    document.addEventListener('click', this.handle, true)
  }

  componentWillUnmount() {
    document.removeEventListener('touchend', this.handle, true)
    document.removeEventListener('click', this.handle, true)
  }

  handle = e => {
    if (e.type === 'touchend') this.isTouch = true
    if (e.type === 'click' && this.isTouch) return
    const el = this.container
    const { className, id } = e.target
    const { onClickOutside, exceptionElementClass, exceptionElementId } = this.props
    const isExceptionByClass = className.split(' ').some(name => exceptionElementClass.indexOf(name) > -1)
    const isExceptionById = exceptionElementId.indexOf(id) > -1
    const isException = isExceptionByClass || isExceptionById
    if (el && !el.contains(e.target) && !isException) onClickOutside(e)
  }
}
